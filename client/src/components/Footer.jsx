import { Container } from '@mui/system';
import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

function Footer() {
  return (
 <>
 <Box sx={{ flexGrow: 1,backgroundColor:'rgba(0, 0, 0, 0.90)',padding:'50px 0' }}>
 <Container maxWidth='lg' >
      <Grid container spacing={2}>
        <Grid item md={5} xs={6}>
            <Typography style={{color:'white',fontSize:'25px',fontWeight:'700'}}>About Us</Typography><br />
            <Typography style={{color:'lightgray'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do <br /> eiusmod tempor incididunt ut labore dolore magna aliqua.</Typography><br />
            <Typography style={{color:'lightgray'}}>
            Copyright ©2023 All rights reserved | This template is made with <br /> + by <a href="#" style={{color:'#fab700'}}>Colorib</a>
            </Typography>
        </Grid>
        <Grid item md={4} xs={6}>
        <Typography style={{color:'white',fontSize:'25px',fontWeight:'700'}}>Newsletter</Typography><br />
        </Grid>
        <Grid item md={4} xs={6}>
        </Grid>
       
      </Grid>
 </Container>
    </Box>
 </>
  )
}

export default Footer