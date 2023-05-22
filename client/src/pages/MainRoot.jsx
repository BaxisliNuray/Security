import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import { Container } from '@mui/material'

function MainRoot() {
    return (
        <>

            <Navbar />
                <Outlet />
            <Container maxWidth='lg'>
                <Footer />
            </Container>
        </>
    )
}

export default MainRoot