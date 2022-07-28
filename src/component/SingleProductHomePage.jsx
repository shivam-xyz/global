import { Button, CardMedia, Grid, Paper, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyles = makeStyles(theme=>({
  cardmedia:{
    height:theme.spacing(30)
  },
  info:{
    display:'flex',
    justifyContent:'space-between',
    paddingLeft:theme.spacing(1),
    paddingRight:theme.spacing(1),
    alignItems:'center'
  },
  btn:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    paddingBottom:theme.spacing(1),
    paddingTop:theme.spacing(1)
  }

}))

const SingleProductHomePage = ({product,cart,setCart}) => {
  const classes = useStyles()
  console.log(cart)
  return (
    <>
      <Grid item xs={12} sm={12} md={6} lg={3} >
        <Paper elevation={24}>
          <CardMedia image={product.image} className={classes.cardmedia}/>
          <div className={classes.info}>
            <Typography variant='h6'>Product Name</Typography>
            <Typography variant='h6'>Pro Price</Typography>
          </div>
          <div className={classes.btn}>
          {
          cart.includes(product)
          ?
          <Button size='large' onClick={()=>{setCart(cart.filter((car)=>{return !(car.id == product.id) }))}} variant='contained'>Remove from Card</Button>
          :
          <Button size='large' onClick={()=>{setCart([...cart,product])}} variant='contained'>Add To Card</Button>
          }
            
          </div>
        </Paper>
      </Grid>
    </>
  )
}

export default SingleProductHomePage