import React from 'react'
import './styles.scss'

export function Navbar() {
    const logo = '/images/logo.png'
    return (
        <>
            <nav className="navbar navbar-light bg-light">
                <div className="container justify-content-center">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="Our logo image" width="154" />
                    </a>
                </div>
            </nav>
        </>
    )
}
