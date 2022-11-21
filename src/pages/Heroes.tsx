import React, { useEffect, useState } from 'react';
import {Box, Grid, Button, Card, CardMedia, CardContent, Typography, CardActions, ThemeProvider, createTheme} from '@mui/material';
import { HeroData } from '../interfaces/Heroes'
import { useNavigate } from 'react-router-dom';


function Heroes() {

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

  const navigate = useNavigate();

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
              <Card sx={{maxWidth: 250}} key={hero.id} >
                <CardMedia
                  component='img' 
                  height='100%'
                  image={hero.image}
                  alt={hero.name}
                />
                <CardContent>
                  <Typography textAlign='center' textTransform='uppercase' fontWeight='bold'>
                    {hero.name}
                  </Typography>
                  <Typography textAlign='center' marginTop={2}>
                    Endurance : {hero.stamina}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button 
                    size='small' 
                    onClick={() => navigate(`/hero/${hero.id}`)
                  }>Détail</Button>
                </CardActions>
              </Card>
            </Grid>
          ))
          :
          heroes
          .filter((hero) => hero.stamina > 80)
          .map((hero) => (
            <Grid key={hero.id} paddingY={2}>
              <Card sx={{maxWidth: 250}} key={hero.id} >
                <CardMedia
                  component='img' 
                  height='100%'
                  image={hero.image}
                  alt={hero.name}
                />
                <CardContent>
                  <Typography textAlign='center' textTransform='uppercase' fontWeight='bold'>
                    {hero.name}
                  </Typography>
                  <Typography textAlign='center' marginTop={2}>
                    Endurance : {hero.stamina}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size='small' onClick={() => 
                    navigate(`/hero/${hero.id}`)
                  }>Détail</Button>
                </CardActions>
              </Card>
            </Grid>
          ))
          }
        </Grid>
      </Box>
    </div>
  )
  
}

export default Heroes;