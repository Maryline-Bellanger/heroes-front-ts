import React from 'react'
import {HeroData} from '../interfaces/Heroes';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';


interface HeroDetailProps {
  oneHero: HeroData | null
}

const HeroDetail: React.FC<HeroDetailProps> =  ({oneHero}) => {

  const navigate = useNavigate();
  
  return (
    <div  style={{display: 'flex', justifyContent:'center'}}>
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