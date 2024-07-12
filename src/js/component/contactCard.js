import React from "react"
import { Link } from "react-router-dom";

export const ContactCard = ({ contact }) => {
  return (
    <div className="outerContainer d-flex flex-row justify-content-center">
      <div className="leftContainer border">
        <div className="information d-grid">
          <p>{contact.name}</p>
          <div>
            <i className="fa-solid fa-location-dot"></i>
            <p>{contact.address}</p>
          </div>
          <div>
            <i className="fa-solid fa-phone"></i>
            <p>{contact.phone}</p>
          </div>
          <i className="fa-solid fa-envelope"></i>
          <p>{contact.email}</p>
          <Link to={`/contact/${contact.id}`}><i className="fa-solid fa-pencil pr3"></i>Edit Contact</Link>
        </div>
      </div>
    </div>
  )
}