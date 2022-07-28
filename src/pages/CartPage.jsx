import { Button, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useContext, useEffect, useState } from 'react';
import Api from '../component/Api';
import SingleProductCartPage from '../component/SingleProductCartPage'
import { myCartContext } from '../Context';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme=>({
   mainDiv:{
    marginTop:theme.spacing(10)
   },
   cartinfo:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column'
   },
   empty:{
    textAlign:'center',
    marginTop:theme.spacing(10),
    fontSize:theme.spacing(4),
    color:'red'
   },
   shopbtn:{
    textAlign:'center',
    textDecoration:'none',
    color:'black',
    textTransform:'capitalize'
   }
}))

const CartPage = () => {
  const [products] = useState(Api)
  
  const {cart,setCart} = useContext(myCartContext)
  const [length,setLength]= useState()
  const [total , setTotal]= useState()
  const classes = useStyles()
  useEffect(()=>{setTotal(cart.reduce((acc,el)=>acc = Number(acc) + Number(el.price),0));
                setLength(cart.length)
    
  })
  // console.log(products)
  return (
    <>
      <div className={classes.mainDiv}>
      <div className={classes.cartinfo}>
      <div>
        <Typography variant='h4'>My Cart</Typography>
        </div>
        <div>
        <Typography variant='h6'>Total {total} Rs.</Typography>
        </div>
        <div>
        <Typography variant='h6'>{length} Items</Typography>
        </div>
        
      </div>
        {cart.length===0?(<><div className={classes.empty}>Cart is Empty </div><br /> <div className={classes.shopbtn}><Button  variant="contained"><Link className={classes.shopbtn} to="/">Continue Shopping</Link></Button></div></>):(<Grid container spacing={4}>
          {cart.map((product)=>{return <SingleProductCartPage product={product} cart={cart} setCart={setCart} />})}
        </Grid>)}
      </div>
    </>
  )
}

export default CartPage