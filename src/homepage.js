import React from 'react';
import { Box } from '@mui/material';
import cover from './cover.png';


const HeaderIcon = () => {
    return (
        <Box 
        component="img" 
        src={cover} 
        alt="Header Logo"
        sx={{ width: '100%', height: '100%', maxWidth: '500px'}}
        />
    )
};


const HomePage = () => {
    return (
        <HeaderIcon/>
    )
};

export default HomePage;