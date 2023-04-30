import React from "react"

export default function Card(props) {

    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.country === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
            {badgeText && <div className="soldout">{badgeText}</div>}
            <img className="card-img" src={`/images/${props.img}`} alt="s" />
            <div className="card-ratebox">
                <img className="card-star" src="/images/Star.png" alt="" />
                <span className="card-rate">{props.rating}</span>
                <span className="card-location">({props.reviewCount}) • </span>
                <span className="card-location">{props.country}</span>
            </div>
            <p className="card-title">{props.title}</p>
            <p className="card-price"><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}