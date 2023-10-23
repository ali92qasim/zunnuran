// src/components/AboutSection.tsx

import React from 'react';
import { Grid, Typography, Container } from '@mui/material';
import aboutImage from '../assets/close-up-hacker.jpg'; // Replace with your actual image URL

const AboutSection: React.FC = () => {
    return (
        <div style={{ backgroundColor: '#fff', margin: '50px 0 50px 0' }} id="about">
            <Container sx={{margin: 0}}>
                <Grid container spacing={3}>
                    {/* Left Column with Image */}
                    <Grid item xs={12} sm={6}>
                        <img src={aboutImage} alt="About Us" style={{ width: '100%', height: 'auto', borderRadius: '8px', position: 'relative', top: '-100px', left: '0', right: '0', zIndex: 1 }} />
                    </Grid>
                    {/* Middle Column with Text */}
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h2" sx={{ marginBottom: '1rem', color: '#1f1f25'}}>
                            About
                        </Typography>
                        <Typography variant="body1">
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum,
                        </Typography>
                    </Grid>
                    {/* Right Column with Text */}
                    {/*<Grid item xs={12} sm={3}>*/}
                    {/*    <Typography variant="h5" style={{ marginBottom: '1rem' }}>*/}
                    {/*        Who We Are*/}
                    {/*    </Typography>*/}
                    {/*    <Typography variant="body1">*/}
                    {/*        There are many variations of passages of Lorem Ipsum available, but the majority have suffered.*/}
                    {/*    </Typography>*/}
                    {/*</Grid>*/}
                </Grid>
            </Container>
        </div>
    );
};

export default AboutSection;
