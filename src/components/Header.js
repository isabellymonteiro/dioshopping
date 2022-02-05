import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Button } from '@material-ui/core/';
import Cart from './Cart';

const Header = () => {
    return(
        <Grid container direction="row" justify="space-between" alignItems="center" xs={12} style={{marginTop: '10px'}}>
            <Typography variant='h3'>
                Dio Shopping
            </Typography>
            <Link to="/" style={{textDecoration: 'none'}}>
                <Button color="default">Home</Button>
            </Link>
            <Link to="/contato" style={{textDecoration: 'none'}}>
                <Button color="default">Contato</Button>
            </Link>
            <Cart />   

            
        </Grid>
    )
}

export default Header;
