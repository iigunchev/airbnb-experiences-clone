import React from 'react'
import photo from "../images/photo-grid.png"

export default function Hero() {
    return (
        <header>
            <img className="header--photoGrid" src={photo} alt="Experiences" />
            <h1 className="header--h1">Online Experiences</h1>
            <p className="header--p">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </header>
    )
}
