/* eslint-disable no-restricted-globals */
import { useState } from 'react'
import {IHeroData} from '../interfaces/IHeroes';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Box, Dialog, DialogProps, DialogContent } from '@mui/material';

interface IHeroDetailsProps {
  hero: IHeroData
}

  function HeroDetail({hero}: IHeroDetailsProps) {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState<DialogProps['scroll']>('paper');

  const handleClickOpen = (scrollType: DialogProps['scroll']) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Button 
        size='small' 
        onClick={handleClickOpen('paper')} color="secondary"
      >
        Détail
      </Button>
      <Dialog 
        open={open}
        onClose={handleClose}
        scroll={scroll}
      >
        <DialogContent dividers={scroll === 'paper'}>
        <Card sx={{maxWidth: 400}} style={{display:'flex', flexDirection:'column', justifyContent:'center', textAlign: "center"}} >
          <CardMedia
            component='img' 
            height='100%'
            image={hero?.image}
            alt={hero?.name}
          />
          <CardContent>
            <Typography textAlign='center' textTransform='uppercase' fontWeight='bold'>
              {hero?.name}
            </Typography>
            <Typography textAlign='center' color='text.secondary'>
              Genre : {hero?.gender} - Race : {hero?.race}
            </Typography>
            <Typography textAlign='center' color='text.secondary'>
              Taille : {hero?.height} - Poids : {hero?.weight}
            </Typography>
            <Typography textAlign='center' marginTop={2}>Stats</Typography>
            <Typography textAlign='center' color='text.secondary'>
              Vitesse : {hero?.speed} - Force : {hero?.power}
            </Typography>
            <Typography textAlign='center' color='text.secondary'>
              Endurance : {hero?.stamina}
            </Typography>
          </CardContent>
          <CardActions  style={{justifyContent: 'center'}}>
            <Button size='small' onClick={handleClose} color="secondary">
              Retour
            </Button>
          </CardActions>
        </Card>
        </DialogContent>
      </Dialog>
    </Box>
  )
}

export default HeroDetail