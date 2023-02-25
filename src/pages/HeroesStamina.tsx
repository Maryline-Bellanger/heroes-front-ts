import { Box, Grid } from '@mui/material'
import { IHeroData } from '../interfaces/IHeroes'
import HeroCard from '../components/HeroCard';

interface IHeroesStaminaProps {
  heroes: Array<IHeroData>;
}

function HeroesStamina({heroes}: IHeroesStaminaProps) {
  return (
    <Box style={{
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      paddingTop: 100,
    }} component="main">
      <Grid container justifyContent='space-evenly' padding={2}  columns={{xs: 4, sm: 8, md: 12}}>
        {
        heroes
        .sort(function(a,b){
          return a.name.localeCompare(b.name)
        })
        .filter((hero) => hero.stamina > 80)
        .map((hero) => (
          <Grid key={hero.id} paddingY={2}>
            <HeroCard hero={hero} />
          </Grid>
        ))
        }
      </Grid>
    </Box>
  )
}

export default HeroesStamina