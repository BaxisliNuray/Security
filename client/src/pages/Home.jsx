import { Typography } from '@mui/material'
import React from 'react'
import home from './home.module.css'
import { Container } from '@mui/system';
import { Button } from '@mui/base';

function Home() {
    return (
        <>
            <div className={home.img}>
                <Container>
                <div style={{paddingTop:'35%'}}>
                <Typography className={home.open}  >OPENNING ON 21ST FEBRUARY, 2018</Typography>
                <Typography className={home.heading}>Exhibition on Modern Era</Typography>
                <Typography style={{color:'white',marginTop:'10px'}} >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna <br /> aliqua. Ut enim ad minim. sed do eiusmod tempor incididunt..</Typography>
                </div>
                <Button>GET STARTED</Button>
                </Container>
            </div>


        </>
    )
}

export default Home