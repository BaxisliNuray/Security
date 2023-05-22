import { Typography } from '@mui/material'
import React from 'react'
import home from './home.module.css'
import { Container } from '@mui/system';
import HomeSec2 from './HomeSec2';
import HomeSec3 from './HomeSec3';
import HomeSec4 from './HomeSec4';
import HomeSec5 from './HomeSec6';

function Home() {
    return (
        <>
            <div className={home.img}>
                <Container>
                    <div style={{ paddingTop: '35%' }}>
                        <p  className={home.open}  >OPENNING ON 21ST FEBRUARY, 2018</p>
                        <p className={home.heading}>Exhibition on Modern Era</p>
                        <Typography style={{ color: 'white', marginTop: '10px' }} >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna <br /> aliqua. Ut enim ad minim. sed do eiusmod tempor incididunt..</Typography>
                    </div>
                    <button className={home.button}  variant="text">GET STARTED</button>
                </Container>
            </div>
            <HomeSec2 />
            <HomeSec3 />
            <HomeSec4 />
            <HomeSec5/>



        </>
    )
}

export default Home