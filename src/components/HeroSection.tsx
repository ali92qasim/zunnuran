import React from 'react';
import { AppBar, Toolbar, Typography, Grid, Container, Link, Box } from '@mui/material';
import Icon1 from '../assets/icon-01.png';
import Icon2 from '../assets/icon-02.png';
import Icon3 from '../assets/icon-03.png';
import logo from '../assets/logo.png';
import backgroundImage from '../assets/bg-image-1.jpg';
const HeroSection: React.FC = () => {
    const linkStyle = {
        margin: '0 10px',
        textDecoration: 'none',
        color: '#c6c9d8',
    };
    return (
        <Grid container sx={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative', padding: '2rem'}}>
            {/* Navbar */}
            <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none', position: 'relative', zIndex: '2', marginBottom: '50px' }}>
                <Toolbar>
                    <Box component="img" src={logo} sx={{width: '176px', height: 'auto'}} />
                    <Box sx={{ flexGrow: 1 }}></Box>
                    <Typography variant="body1">
                        <Link href="/" sx={{...linkStyle, '&:hover': { color: '#f9004d'}}}>Home</Link>
                        <Link href="#about" sx={{...linkStyle, '&:hover': { color: '#f9004d'}}}>About</Link>
                        <Link href="#services" sx={{...linkStyle, '&:hover': { color: '#f9004d'}}}>Services</Link>
                        <Link href="#contact" sx={{...linkStyle, '&:hover': { color: '#f9004d'}}}>Contact</Link>
                    </Typography>
                </Toolbar>
            </AppBar>

            {/* Tagline */}
            <Container sx={{padding: 0, margin: '0 0 30px 0'}}>
                <Typography variant="h1" sx={{ marginTop: '2rem', background: 'linear-gradient(145deg, #f81f01, #ee076e)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', lineHeight: '112px', marginBottom: '15px', position: 'relative', zIndex: '2', display: 'inline-block' }}>
                    A DIGITAL <br /> AGENCY.
                </Typography>
            </Container>

            {/* Services */}
            <Container sx={{ position: 'relative', zIndex: '2', display: 'inline-block', paddingBottom: '5rem', margin: 0 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={4}>
                        <Box component="img" src={Icon1} sx={{marginBottom: '34px'}} />
                        <Typography variant="h5" sx={{color: '#c6c9d8', marginBottom: '20px' }}>
                            Business Strategy
                        </Typography>
                        <Typography variant="body1" sx={{color: '#c6c9d8', opacity: '.75', marginBottom: '40px'}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box component="img" src={Icon2} sx={{marginBottom: '34px'}} />
                        <Typography variant="h5" sx={{color: '#c6c9d8', marginBottom: '20px' }}>
                            Website Development
                        </Typography>
                        <Typography variant="body1" sx={{color: '#c6c9d8', opacity: '.75', marginBottom: '40px'}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box component="img" src={Icon3} sx={{marginBottom: '34px'}} />
                        <Typography variant="h5" sx={{color: '#c6c9d8', marginBottom: '20px' }}>
                            Marketing & Reporting
                        </Typography>
                        <Typography variant="body1" sx={{color: '#c6c9d8', opacity: '.75', marginBottom: '40px'}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    zIndex: 1,
                }}
            />
        </Grid>
    );
};

export default HeroSection;
