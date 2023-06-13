import * as React from 'react';
import {AppBar, IconButton, Toolbar, Typography, Button} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import LogoGE from '../icons/logo_ge_big.svg';

export default function Header () {
    return (
        <AppBar position="sticky" sx={{padding: 1}}>
            <Toolbar variant="dense">
                <LogoGE alt="République et canton de Genève" style={{height: "45px"}}/>
                <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>test appli Material</Typography>
                <Button color="inherit">Logout</Button>
            </Toolbar>
        </AppBar>
    );
}