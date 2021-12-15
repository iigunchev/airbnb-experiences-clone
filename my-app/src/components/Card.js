import React from 'react'

export default function Card(props) {
    return (
        <div className="">
            <section className="card">
                <img className="exp--img" src={props.img} alt=""></img>
                <span>&#9733; {props.rating} ({props.reviewCount}) · {props.location}</span>
                <p>{props.title}</p>
                <p><b>From ${props.price}</b> / person</p>
            </section>
        </div>
    )
}
