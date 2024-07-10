import React,{useContext, useState, useEffect} from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {
	const {store, actions} = useContext(Context)
	const [newContact, setNewContact] = useState({
		name:"",
		phone:"",
		address:"",
		email:"",
	});

useEffect(() => {
	actions.getContacts();
}, []);
const handleAddContacts = () => {
	actions.addContacts(
		newContact.name,
		newContact.phone,
		newContact.address,
		newContact.email,
	)
	setNewContact({
		name:"",
		phone:"",
		address:"",
		email:"",
	});
};
const handleInputChange = (e) => {
	setNewContact({
		...newContact, [e.target.name]:e.target.value
	});
};
	return(
	<div className="d-flex flex-column align-items-center">
		<h1>Contact List</h1>
		<div className="contact-form text-center">
			<div>
				<input
				type="text"
				name="name"
				placeholder="Name"
				value={newContact.name}
				onChange={handleInputChange}
				></input>
				<input
				type="text"
				name="phone"
				placeholder="Phone Number"
				value={newContact.phone}
				onChange={handleInputChange}
				>
				</input>
				<input
				type="text"
				name="address"
				placeholder="Address"
				value={newContact.address}
				onChange={handleInputChange}
				></input>
				<input
				type="email"
				name="email"
				placeholder="Email Address"
				value={newContact.email}
				onChange={handleInputChange}
				></input>
				<button
				onClick={handleAddContacts}

				>Add Contacts</button>
			</div>
			<ul className="list-unstyled">
				{store.contacts.length > 0 ? (store.contacts.map((contact)=> (
					<li
					key= {contact.id}
					> <Link to = {`/contact/${contact.id}`}>{contact.name}</Link> </li>
				))):(<p>No Contacts Available</p>)}
				
			</ul>
		</div>
	</div>
	);
}
