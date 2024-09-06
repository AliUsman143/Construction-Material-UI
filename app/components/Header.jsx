"use client";
import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useState } from 'react';

const drawerWidth = 240;
const navItems = ['Home', 'Over ons', 'Diensten', 'Contact'];

function Header(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                <div className='w-52 mx-auto'><img src="/images/logo.png" alt="Logo" /></div>
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item} sx={{ color: 'black' }} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav" sx={{ bgcolor: 'white', padding: { xs: '5px', sm: '10px' } }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { md: 'none' }, color: 'black' }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block', md: 'block' } }}
                    >
                        <div className='w-52'><img src="/images/logo.png" alt="Logo" /></div>
                    </Typography>
                    <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                        {navItems.map((item) => (
                            <Button
                                key={item}
                                sx={{
                                    color: 'black',
                                    marginRight: { md: '30px', sm: '15px' }, 
                                    fontWeight: '500',
                                    fontSize: { md: '1.10rem', sm: '0.95rem' } 
                                }}
                            >
                                {item}
                            </Button>
                        ))}
                        <Button
                            sx={{
                                backgroundColor: 'black',
                                color: 'white',
                                '&:hover': {
                                    backgroundColor: 'darkgrey',
                                },
                                marginLeft: { md: '20px', sm: '10px' }, 
                                paddingX: { xs: '10px', md: '16px' }
                            }}
                        >
                            Offerate aanveragen
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'block', md: 'none' }, // Hide drawer on medium and larger screens
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </Box>
    );
}

Header.propTypes = {
    window: PropTypes.func,
};

export default Header;
