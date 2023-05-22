import { Typography } from '@mui/material'
import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { Link } from "react-router-dom";
import { Container } from '@mui/system';


function HomeSec2() {
    return (
        <>
            <Container style={{padding:'90px 0px'}}>
                <Typography style={{ fontSize: '35px', textAlign: 'center',fontWeight:'700' }}>Our Offered Services</Typography>
                <p style={{ color: 'lightgrey', textAlign: 'center' }}>Who are in extremely love with eco friendly system.</p>
                <Box sx={{ flexGrow: 1, margin: '100px 0px' }}>
                    <Grid container spacing={10}>
                        <Grid item md={4}>
                            <Card sx={{ maxWidth: 350 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="190"
                                        image="	https://preview.colorlib.com/theme/security/img/s1.jpg"

                                    />
                                    <CardContent>
                                        <Link style={{ textDecoration: 'none', fontSize: '20px', margin: '20px 0' }} gutterBottom variant="h5" component="div">
                                            Basic & Common Repairs
                                        </Link>
                                        <Typography variant="body2" color="text.secondary" style={{ marginTop: '20px' }}>
                                            Computer users and programmers have become so accustomed to using Windows, even for the changing capabilities and the appearances of the graphical.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item md={4}>
                            <Card sx={{ maxWidth: 350 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="190"
                                        image="	https://preview.colorlib.com/theme/security/img/s2.jpg.webp"

                                    />
                                    <CardContent>
                                        <Link style={{ textDecoration: 'none', fontSize: '20px', margin: '20px 0' }} gutterBottom variant="h5" component="div">
                                            Brake Repairs & Services
                                        </Link>
                                        <Typography variant="body2" color="text.secondary" style={{ marginTop: '20px' }}>
                                            Computer users and programmers have become so accustomed to using Windows, even for the changing capabilities and the appearances of the graphical.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>

                        </Grid>
                        <Grid item md={4}>
                            <Card sx={{ maxWidth: 350 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="190"
                                        image="	https://preview.colorlib.com/theme/security/img/s3.jpg"

                                    />
                                    <CardContent>
                                        <Link style={{ textDecoration: 'none', fontSize: '20px', margin: '20px 0' }} gutterBottom variant="h5" component="div">
                                            Preventive Maintanance
                                        </Link>
                                        <Typography variant="body2" color="text.secondary" style={{ marginTop: '20px' }}>
                                            Computer users and programmers have become so accustomed to using Windows, even for the changing capabilities and the appearances of the graphical.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>

            </Container>
        </>
    )
}

export default HomeSec2