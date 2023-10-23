import React from 'react';
import { Grid, Typography } from '@mui/material';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';

const Footer: React.FC = () => {
    return (
        <footer>
            <Grid container sx={{ backgroundColor: '#1d1d24', padding: '2rem', color: '#fff' }}>
                <Grid item xs={12} sm={4}>
                    {/* Left Column - Social Media Icons */}
                    <Grid container spacing={2}>
                        <Grid item>
                            <Facebook />
                        </Grid>
                        <Grid item>
                            <Twitter />
                        </Grid>
                        <Grid item>
                            <Instagram />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={4}>
                    {/* Center Column - Dummy Email */}
                    <Typography variant="body2" align="center">dummy@example.com</Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                    {/* Right Column - Copyright Text */}
                    <Typography variant="body2" align="right">
                        &copy; {new Date().getFullYear()} Your Company Name
                    </Typography>
                </Grid>
            </Grid>
        </footer>
    );
};

export default Footer;
