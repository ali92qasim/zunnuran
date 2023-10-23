// src/components/ServicesSection.tsx

import React from 'react';
import { Grid, Typography, Container, Box } from '@mui/material';
import CasesOutlinedIcon from '@mui/icons-material/CasesOutlined';
import WebhookOutlinedIcon from '@mui/icons-material/WebhookOutlined';
import AddchartIcon from '@mui/icons-material/Addchart';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
const ServicesSection: React.FC = () => {
    return (
        <div style={{ backgroundColor: '#f8f9fb', padding: '7rem 0' }} id="services">
            <Container>
                <Grid container spacing={4}>
                    {/* Left Column with Text */}
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h2" sx={{lineHeight: '1.5'}}>
                            Services
                        </Typography>
                        <Typography variant="body1" align="justify">
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
                        </Typography>
                    </Grid>
                    {/* Right Column with Services */}
                    <Grid item xs={12} sm={8}>
                        <Grid container spacing={2}>
                            {/* First Two Services */}
                            <Grid item xs={12} sm={6}>
                                <Box
                                    sx={{
                                        padding: '2rem',
                                        textAlign: 'center',
                                        cursor: 'pointer',
                                        borderRadius: '10px',
                                        '&:hover': {
                                            background: 'linear-gradient(90deg,#f61b10,#ef0963)',
                                            color: '#fff',
                                        },
                                    }}
                                >
                                    <CasesOutlinedIcon fontSize="large" />
                                    <Typography variant="h3" sx={{marginBottom: '19px', marginTop: '19px',fontSize: '19px'}}>Business Strategy</Typography>
                                    <Typography variant="body1" align="justify">
                                        I throw myself down among the tall grass by the stream as I lie close to the earth.
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Box
                                    sx={{
                                        padding: '2rem',
                                        textAlign: 'center',
                                        cursor: 'pointer',
                                        borderRadius: '10px',
                                        '&:hover': {
                                            background: 'linear-gradient(90deg,#f61b10,#ef0963)',
                                            color: '#fff',
                                        },
                                    }}
                                >
                                    <WebhookOutlinedIcon fontSize="large" />
                                    <Typography variant="h3" sx={{marginBottom: '19px', marginTop: '19px',fontSize: '19px'}}>Website Development</Typography>
                                    <Typography variant="body1" align="justify">
                                        I throw myself down among the tall grass by the stream as I lie close to the earth.
                                    </Typography>
                                </Box>
                            </Grid>
                            {/* Next Two Services */}
                            <Grid item xs={12} sm={6}>
                                <Box
                                    sx={{
                                        padding: '2rem',
                                        textAlign: 'center',
                                        cursor: 'pointer',
                                        borderRadius: '10px',
                                        '&:hover': {
                                            background: 'linear-gradient(90deg,#f61b10,#ef0963)',
                                            color: '#fff',
                                        },
                                    }}
                                >
                                    <AddchartIcon fontSize="large" />
                                    <Typography variant="h3" sx={{marginBottom: '19px', marginTop: '19px',fontSize: '19px'}}>Marketing and Reporting</Typography>
                                    <Typography variant="body1" align="justify">
                                        I throw myself down among the tall grass by the stream as I lie close to the earth.
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Box
                                    sx={{
                                        padding: '2rem',
                                        textAlign: 'center',
                                        cursor: 'pointer',
                                        borderRadius: '10px',
                                        '&:hover': {
                                            background: 'linear-gradient(90deg,#f61b10,#ef0963)',
                                            color: '#fff',
                                        },
                                    }}
                                >
                                    <MobileFriendlyIcon fontSize="large" />
                                    <Typography variant="h3" sx={{marginBottom: '19px', marginTop: '19px',fontSize: '19px'}}>Mobile App Development</Typography>
                                    <Typography variant="body1" align="justify">
                                        I throw myself down among the tall grass by the stream as I lie close to the earth.
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default ServicesSection;
