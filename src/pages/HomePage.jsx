import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useContext, useState } from 'react';
import Api from '../component/Api';
import SingleProductHomePage from '../component/SingleProductHomePage'
import {myCartContext} from '../Context'

const useStyles = makeStyles(theme=>({
   mainDiv:{
    marginTop:theme.spacing(10)
   }
}))

const HomePage = () => {
  const {cart,setCart} = useContext(myCartContext)
  const [products] = useState(Api)
  const classes = useStyles()
  // console.log(cart)
  return (
    <>
      <div className={classes.mainDiv}>
        <Grid container spacing={4}>
          {products.map((product)=>{return <SingleProductHomePage cart={cart} setCart={setCart} product={product} />})}
        </Grid>
      </div>
    </>
  )
}

export default HomePage