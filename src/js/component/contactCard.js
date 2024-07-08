import React from "react"

export const ContactCard = () => {
    return(
        <div className ="outerContainer d-flex">
            <div className="leftContainer">
                <div className="image">
                    <img></img>
                </div>
                <div className="information d-grid">
                    <p>name</p>
                    <div>
                        <i className="fa-solid fa-location-dot"></i>
                        <p>address</p>
                    </div>
                    <div>
                        <i className="fa-solid fa-phone"></i>
                        <p>phone</p>
                    </div>
                        <i className="fa-solid fa-envelope"></i>
                        <p>email</p>
                </div>
            </div>
            <div className="rightContainer text-align-right">
                <i className="fa-solid fa-pencil pr3"></i>
                <i className="fa-solid fa-trash-can"></i>
            </div>
        </div>
    )
}