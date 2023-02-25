import { Box, Grid } from '@mui/material';
import { IHeroData } from '../interfaces/IHeroes';
import HeroCard from '../components/HeroCard';

interface IHeroesMarvelProps {
  heroes: Array<IHeroData>;
}
const drawerWidth = 240;

function HeroesMarvel({heroes}: IHeroesMarvelProps) {
    return (
      <Box style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        paddingTop: 100,
      }} component="main" sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
        <Grid container justifyContent='space-evenly' padding={2}  columns={{xs: 4, sm: 8, md: 12}}>
          {
          heroes
          .sort(function(a,b){
            return a.name.localeCompare(b.name)
          })
          .filter((hero) => hero.marvel === true)
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

export default HeroesMarvel