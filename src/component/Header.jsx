import { AppBar, Avatar, Toolbar, Typography } from '@mui/material';
import {makeStyles} from '@mui/styles'
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {myCartContext} from '../Context'

const useStyles = makeStyles(theme=>({
    toolbar:{
        display:'flex',
        justifyContent:'space-between',
        backgroundColor: theme.palette.secondary.main ,
    },
    homeTypo:{
        color:'white',
        textDecoration:'none',
        listStyle:'none'

    }
}))

const Header = () => {
    const {cart,setCart} = useContext(myCartContext)
    const [length,setLength] = useState()
    const classes = useStyles()
    useEffect(()=>{setLength(cart.length)})
  return (
    <>
        <AppBar>
            <Toolbar className={classes.toolbar} >
                <Typography className={classes.homeTypo} variant='h5'>
                    <Link className={classes.homeTypo} to="/">Home</Link>
                </Typography>
                    <Typography className={classes.homeTypo} variant='h5'>
                    <Link className={classes.homeTypo} to="cart">Cart <small>({length})</small></Link>
                </Typography>
                <Avatar alt="Priya" src="https://www.desicomments.com/dc4/01/459226/459226.jpg" />
            </Toolbar>
        </AppBar>
    </>
  )
}

export default Header