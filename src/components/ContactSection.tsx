import React from 'react';
import { Grid, Typography, Box, TextField, Button } from '@mui/material';

const ContactSection: React.FC = () => {
    return (
        <div id="contact">
            <Grid
                container
            >
                {/* Left Side */}
                <Grid item xs={12} sm={12} sx={{ background: 'linear-gradient(145deg, #f81f01, #ee076e)', padding: '2rem' }}>
                    <Typography variant="h4" gutterBottom color="#FFFFFF">
                        Reach Out Today!
                    </Typography>
                    <Box
                        component="form"
                        noValidate
                        autoComplete="off"
                    >
                        <TextField
                            label="Name"
                            variant="outlined"
                            fullWidth
                            required
                            margin="normal"
                            InputProps={{style: {'color': '#FFFFFF'}}}
                            InputLabelProps={{style: {'color': '#FFFFFF'}}}
                            sx={{
                                '& label.Mui-focused': {
                                    color: '#FFFFFF60',
                                },
                                '& .MuiInput-underline:after': {
                                    borderBottomColor: '#FFFFFF60',
                                },
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: '#FFFFFF60',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: '#FFFFFF60',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#FFFFFF60',
                                    },
                                },
                            }}
                        />
                        <TextField
                            label="Email"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            required
                            InputProps={{style: {'color': '#FFFFFF'}}}
                            InputLabelProps={{style: {'color': '#FFFFFF'}}}
                            sx={{
                                '& label.Mui-focused': {
                                    color: '#FFFFFF60',
                                },
                                '& .MuiInput-underline:after': {
                                    borderBottomColor: '#FFFFFF60',
                                },
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: '#FFFFFF60',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: '#FFFFFF60',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#FFFFFF60',
                                    },
                                },
                            }}
                        />
                        <TextField
                            label="Subject"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            required
                            InputProps={{style: {'color': '#FFFFFF'}}}
                            InputLabelProps={{style: {'color': '#FFFFFF'}}}
                            sx={{
                                '& label.Mui-focused': {
                                    color: '#FFFFFF60',
                                },
                                '& .MuiInput-underline:after': {
                                    borderBottomColor: '#FFFFFF60',
                                },
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: '#FFFFFF60',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: '#FFFFFF60',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#FFFFFF60',
                                    },
                                },
                            }}
                        />
                        <TextField
                            label="Message"
                            multiline
                            rows={4}
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            required
                            InputLabelProps={{style: {'color': '#FFFFFF'}}}
                            InputProps={{style: {'color': '#FFFFFF'}}}
                            sx={{
                                '& label.Mui-focused': {
                                    color: '#FFFFFF60',
                                },
                                '& .MuiInput-underline:after': {
                                    borderBottomColor: '#FFFFFF60',
                                },
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: '#FFFFFF60',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: '#FFFFFF60',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#FFFFFF60',
                                    },
                                },
                            }}
                        />
                        <Button variant="outlined" size="large" sx={{
                            color: '#FFFFFF',
                            borderColor: '#FFFFFF',
                            '&:hover': {
                                backgroundColor: '#FFFFFF',
                                color: '#f81f01',
                            },
                        }}
                        >
                            Send
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
};

export default ContactSection;
