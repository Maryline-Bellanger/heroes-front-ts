import { ListItemButton, ListItemText } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

interface INavItemProps {
  name: string;
  path: string;
  selectedPageTitle: string;
  setSelectedPageTitle: React.Dispatch<React.SetStateAction<string>>;
}

function NavItem({
  name,
  path,
  selectedPageTitle,
  setSelectedPageTitle,
}: INavItemProps) {
  const handleClick = () => {
    setSelectedPageTitle(selectedPageTitle);
  };

  return (
    <NavLink to={path}
    style={({isActive}) => isActive ? {textDecoration: "none", color: "white"} : {textDecoration: "none", color: "#EF6C00"} }
      onClick={handleClick}
    >
      <ListItemButton>
        <ListItemText>{name}</ListItemText>
        </ListItemButton>
    </NavLink>
  )
}

export default NavItem;