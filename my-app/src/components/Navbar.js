import React from 'react'
import logo from "../images/travel-wise-logo.png"

export default function Header() {
    return (
        <nav className="navbar--container">
            <img className="nav--logo" src={logo} alt="Travelwise"/>
        </nav>
    )
}
