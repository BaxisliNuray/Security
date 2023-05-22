import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/system";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import { getSecurity } from "../api/requests";

const HomeSec6 = () => {
    const [cards, setCards] = useState([])
    useEffect(() => {
        getSecurity().then(resp => {
            setCards(resp)
        })
    }, [])
    return (
        <div style={{ width: "100%", height: "100vh", padding: "5% 0 " }}>
            <Typography style={{ fontSize: '36px', textAlign: 'center', fontWeight: '700' }}>Latest From Our Gallery</Typography>
            <p style={{ color: 'lightgrey', textAlign: 'center', marginTop: '2%', fontFamily: 'sans-serif', marginBottom: '40px' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et <br /> dolore magna aliqua.</p>
            <Box sx={{ flexGrow: 1, padding: "4% 0" }}>
                <Container>
                    <Grid container spacing={2}>
                        {cards && cards.map((card) => {
                            return <Grid item xs={12} md={6} lg={3}>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image={card.img}
                                            alt="employer"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                               {card.title}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {card.desc}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        })}
                    </Grid>
                </Container>
            </Box>
        </div>
    );
};

export default HomeSec6;