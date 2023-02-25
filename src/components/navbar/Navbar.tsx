import { WbSunny, Brightness4, Menu } from '@mui/icons-material';
import { AppBar, Box, Drawer, IconButton, Switch, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react';
import NavItemList from './NavItemList';

const drawerWidth = 240;
interface INavbarProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  window?: () => Window;
}

function Navbar({setDarkMode, darkMode, window}: INavbarProps) {
  const [selectedPageTitle, setSelectedPageTitle] = useState("Tous les héros");
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleOpenMenu = () => {
    setMobileOpen(true);
  };

  const handleCloseMenu = () => {
    setMobileOpen(false);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container = window !== undefined ? () => window().document.body : undefined;
  return (
    <Box sx={{display: "flex"}}>
      <AppBar position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },  
        }}>
        <Toolbar>
        <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleOpenMenu}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <Menu />
          </IconButton>
          <Typography>{selectedPageTitle}</Typography>
        </Toolbar>
      </AppBar>
      <Drawer container={container}
          variant="temporary"
          open={mobileOpen}
          onClick={handleCloseMenu}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: "rgba(18,18,18,0.9)" },
          }}>
          <Toolbar>
            <Switch 
            onChange={()=> {setDarkMode(!darkMode)}} 
            checkedIcon={<WbSunny sx={{fontSize: 20, color: 'white'}} />} 
            icon={<Brightness4 sx={{fontSize: 20, color:'white'}} />}
            color="secondary"
            />
          </Toolbar>
          <NavItemList selectedPageTitle={selectedPageTitle} setSelectedPageTitle={setSelectedPageTitle} />
      </Drawer>
      <Drawer 
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: "rgba(18,18,18,0.9)"},
          width: drawerWidth,
          flexShrink: 0,
          
        }}
        open >
          <Toolbar>
            <Switch 
            onChange={()=> {setDarkMode(!darkMode)}} 
            checkedIcon={<WbSunny sx={{fontSize: 20, color: 'white'}} />} 
            icon={<Brightness4 sx={{fontSize: 20, color:'white'}} />}
            color="secondary"
            />
          </Toolbar>
          <NavItemList selectedPageTitle={selectedPageTitle} setSelectedPageTitle={setSelectedPageTitle} />
      </Drawer>
    </Box>
  )
}

export default Navbar;