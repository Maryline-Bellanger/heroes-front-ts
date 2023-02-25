import {Card, CardMedia, CardContent, Typography, CardActions} from '@mui/material';
import { IHeroData } from '../interfaces/IHeroes'
import HeroDetail from './HeroDetail';

interface IHeroProps {
  hero: IHeroData
}

function HeroCard({hero}: IHeroProps) {

  return (
    <div style={{paddingTop: '10px'}}>
      <Card sx={{maxWidth: 250}} >
        <CardMedia
          component='img' 
          height='100%'
          image={hero?.image}
          alt={hero?.name}
        />
        <CardContent style={{display: "flex", flexDirection: "column", textAlign: "center"}}>
          <Typography textTransform='uppercase' fontWeight='bold'>
            {hero?.name}
          </Typography>
          <Typography textAlign='center' marginTop={2}>
            Endurance : {hero?.stamina}
          </Typography>
        </CardContent>
        <CardActions>
          <HeroDetail hero={hero} />
        </CardActions>
      </Card>
    </div>
  )
}

export default HeroCard;