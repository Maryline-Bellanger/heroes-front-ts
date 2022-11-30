import {Button, Card, CardMedia, CardContent, Typography, CardActions} from '@mui/material';
import { HeroData } from '../interfaces/Heroes'
import { useNavigate } from 'react-router-dom';

interface HeroProps {
  hero: HeroData
}

function HeroCard({hero}: HeroProps) {
  const navigate = useNavigate();

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
                  <Button 
                    size='small' 
                    onClick={() => navigate(`/hero/${hero?.id}`)
                  }>Détail</Button>
                </CardActions>
              </Card>
    </div>
  )
}

export default HeroCard;