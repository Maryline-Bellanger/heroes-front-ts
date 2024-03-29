import HeroCard from '../components/HeroCard';
import {Box, Grid} from '@mui/material';
import { IHeroData } from '../interfaces/IHeroes';

interface IHeroesProps {
  heroes: Array<IHeroData>;
}

function HeroesList({heroes}: IHeroesProps) {
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

export default HeroesList;