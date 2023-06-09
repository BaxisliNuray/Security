import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Container } from '@mui/system';
import { Link } from "react-router-dom";
function Navbar() {
    return (
        <>
            <Box sx={{ flexGrow: 1 ,position:'fixed',width:'100%'}}>
                <AppBar style={{background:'lightgray',boxShadow:'none'}} position="static">
                    <Container maxWidth='lg'>
                        <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }} >
                            <Button style={{fontWeight:'700',fontSize:'22px'}}color="inherit">Security Service</Button>

                            <div >
                                <Button color="inherit"><Link style={{textDecoration:'none',color:'white'}} to=''>Home</Link></Button>
                                <Button color="inherit"><Link style={{textDecoration:'none',color:'white'}} to='/add-employee'>Add Security</Link></Button>
                                <Button color="inherit">Service</Button>
                                <Button color="inherit">Team</Button>
                                <Button color="inherit">Price</Button>
                                <Button color="inherit">Blog</Button>
                                <Button color="inherit">Contact</Button>
                                <Button color="inherit">PAges</Button>

                            </div>
                        </Toolbar>
                    </Container>
                </AppBar>
            </Box>
        </>
    )
}

export default Navbar