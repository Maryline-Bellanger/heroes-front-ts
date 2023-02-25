import { Box, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import './App.css';
import HeroesFemale from './pages/HeroesFemale';
import HeroesList from './pages/HeroesList';
import HeroesMarvel from './pages/HeroesMarvel';
import HeroesStamina from './pages/HeroesStamina';
import Navbar from './components/navbar/Navbar';
import { IHeroData } from './interfaces/IHeroes';

function App() {
  const [heroes, setHeroes] = useState<IHeroData[]>([]);

  useEffect(() => {
    const getHeroes = async() => {
      const response = await fetch(`http://localhost:8000/heroes`)
      const data = await response.json()
      setHeroes(data)
    }
    getHeroes()
  }, [])

  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main:"rgba(18,18,18,0.9)",
      },
      secondary: {
        main: "#EF6C00",
      }
    },
  },)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <Box sx={{ display: 'flex' }}>
      <Router>
        <Navbar setDarkMode={setDarkMode} darkMode={darkMode} />
        <Routes>
          <Route path='/' element={<Navigate to='heroes/all' />} />
          <Route path="/heroes/all" element={<HeroesList heroes={heroes} />} />
          <Route path="/heroes/marvel" element={<HeroesMarvel heroes={heroes} />} />
          <Route path="/heroes/female" element={<HeroesFemale heroes={heroes} />} />
          <Route path="/heroes/stamina" element={<HeroesStamina heroes={heroes} />} />
        </Routes>
      </Router>
    </Box>
    </ThemeProvider>
  );
}

export default App;
