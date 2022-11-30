import HeroCard from '../components/HeroCard';
import { useEffect, useState } from 'react';
import {Box, Grid, Button,ThemeProvider, createTheme} from '@mui/material';
import { HeroData } from '../interfaces/Heroes';

function HeroesList() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#985E38',
      }
    }
  })

  const styles = {
    container: 
      {
        display: 'flex',
        justifyContent: 'center',
      }
  };

  const [heroes, setHeroes] = useState<HeroData[]>([]);
  const [isStrong, setIsStrong] = useState(false);

  useEffect(() => {
    const getHeroes = async() => {
      const response = await fetch(`http://localhost:8000/heroes`)
      const data = await response.json()
      setHeroes(data)
    }
    getHeroes()
  }, [])

  return (
    <div style={{paddingTop: '10px'}}>
      <div style={styles.container}>
        <ThemeProvider theme={theme}>
          <Button variant='contained' color="primary" onClick={() => setIsStrong(!isStrong)}>
              {isStrong ? 'Affiche tous les héros' : 'Affiche les héros endurants'}
          </Button>
        </ThemeProvider>
      </div>
      <Box>
        <Grid container justifyContent='space-evenly' padding={2}  columns={{xs: 4, sm: 8, md: 12}}>
          {!isStrong
          ?
          heroes
          .map((hero) => (
            <Grid key={hero.id} paddingY={2}>
              <HeroCard hero={hero} />
            </Grid>
          ))
          :
          heroes
          .filter((hero) => hero.stamina > 80)
          .map((hero) => (
            <Grid key={hero.id} paddingY={2}>
              <HeroCard hero={hero} />
            </Grid>
          ))
          }
        </Grid>
      </Box>
    </div>
  )
}

export default HeroesList;