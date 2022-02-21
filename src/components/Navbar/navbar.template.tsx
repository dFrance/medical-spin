import React from 'react'
import { Container, Nav } from 'react-bootstrap'

export function Navbar() {
    const logo = '/images/logo.png'
    return (
        <>
            <Nav className="navbar navbar-light bg-light">
                <Container className="justify-content-center">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="Our logo image" width="154" />
                    </a>
                </Container>
            </Nav>
        </>
    )
}
