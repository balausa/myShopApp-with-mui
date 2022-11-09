import React from 'react';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import { ShoppingBasket } from '@mui/icons-material';
function Header() {
  return (
    <AppBar position="static">
        <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
                My Shop
            </Typography>
            <IconButton
              color="inherit"
              
            >
                <ShoppingBasket/>
            </IconButton>
        </Toolbar>
    </AppBar>
  )
}

export default Header

