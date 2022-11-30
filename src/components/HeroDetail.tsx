import { useEffect, useState } from 'react'
import {HeroData} from '../interfaces/Heroes';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';

type HeroParams = {
  id: string;
};

  function HeroDetail() {
  const navigate = useNavigate();
  const { id } = useParams<HeroParams>();
  const [oneHero, setOneHero] = useState<HeroData>();

  useEffect(() => {
    const getHero = async() => {
      const response = await fetch(`http://localhost:8000/heroes/${id}`)
      const data = await response.json()
      setOneHero(data)
    }
    getHero()
  }, [id])
  
  return (
    <div  style={{display: 'flex', justifyContent:'center', paddingTop: '20px'}}>
      <Card sx={{maxWidth: 400}} style={{display:'flex', flexDirection:'column', justifyContent:'center'}} >
        <CardMedia
          component='img' 
          height='100%'
          image={oneHero?.image}
          alt={oneHero?.name}
        />
        <CardContent>
          <Typography textAlign='center' textTransform='uppercase' fontWeight='bold'>
            {oneHero?.name}
          </Typography>
          <Typography textAlign='center' color='text.secondary'>
            Genre : {oneHero?.gender} - Race : {oneHero?.race}
          </Typography>
          <Typography textAlign='center' color='text.secondary'>
            Taille : {oneHero?.height} - Poids : {oneHero?.weight}
          </Typography>
          <Typography textAlign='center' marginTop={2}>Stats</Typography>
          <Typography textAlign='center' color='text.secondary'>
            Vitesse : {oneHero?.speed} - Force : {oneHero?.power}
          </Typography>
          <Typography textAlign='center' color='text.secondary'>
            Endurance : {oneHero?.stamina}
          </Typography>
        </CardContent>
        <CardActions  style={{justifyContent: 'center'}}>
          <Button size='small' onClick={() => navigate('/heroes')}>
            Retour
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default HeroDetail