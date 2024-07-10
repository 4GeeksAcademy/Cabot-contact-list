import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

const Contacts = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const { store, actions } = useContext(Context);
  const [contact, setContact] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  const loadContact = () => {
    fetch(`https://playground.4geeks.com/contact/agendas/JacobBCabot/contacts/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setContact({
          name: data.name,
          phone: data.phone,
          email: data.email,
          address: data.address,
        });
      });
  };

  const handleInputChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const saveContact = (e) => {
    e.preventDefault();
    actions.editContact(id, contact.name, contact.phone, contact.email, contact.address);
    navigate("/");
  };

  const deleteContact = () => {
    actions.deleteContact(id);
    navigate("/");
  };

  useEffect(() => {
    loadContact();
  }, []);

  return (
    <div className="d-flex flex-column align-items-center">
      <h1>Edit Contact</h1>
      <div className="edit-contact-form text-center">
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={contact.name}
            onChange={handleInputChange}
          />
          <br />
          <label>Phone:</label>
          <input
            type="text"
            name="phone"
            value={contact.phone}
            onChange={handleInputChange}
          />
          <br />
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={contact.email}
            onChange={handleInputChange}
          />
          <br />
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={contact.address}
            onChange={handleInputChange}
          />
          <br />
          <button onClick={saveContact}>Save Changes</button>
          <button onClick={deleteContact}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
