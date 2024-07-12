import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { ContactCard } from "../component/contactCard";

export const Home = () => {
	const { store, actions } = useContext(Context)
	const [newContact, setNewContact] = useState({
		name: "",
		phone: "",
		address: "",
		email: "",
	});
	const [user, setUser] = useState("JacobBCabot");
	const API_BASE_URL = `https://playground.4geeks.com/contact`;

	useEffect(() => {
		actions.getContacts();
		initializeUser();
	}, [ContactCard]);

	const initializeUser = async () => {
		const response = await fetch(`${API_BASE_URL}/agendas/${user}`, {
			method: "GET",
			headers: {
				"Content-Type": "application.json",
			},
		});
		if (response.ok) {
			const data = await response.json();
		} else {
			const response = await fetch(`${API_BASE_URL}/agendas/${user}`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
			});
		}
		setIsLoading(false);
	};

	const handleAddContacts = () => {
		actions.addContacts(
			newContact.name,
			newContact.phone,
			newContact.email,
			newContact.address,
		)
		setNewContact({
			name: "",
			phone: "",
			email: "",
			address: "",
		});
	};
	const handleInputChange = (e) => {
		setNewContact({
			...newContact, [e.target.name]: e.target.value
		});
	};
	return (
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
						type="email"
						name="email"
						placeholder="Email Address"
						value={newContact.email}
						onChange={handleInputChange}
					></input>
					<input
						type="text"
						name="address"
						placeholder="Address"
						value={newContact.address}
						onChange={handleInputChange}
					></input>
					<button
						onClick={handleAddContacts}

					>Add Contacts</button>
				</div>
				<ul className="list-unstyled">
					{store.contacts.length > 0 ? (store.contacts.map((contact, index) => {
						return (<ContactCard contact={contact} key={index} />)
					})) : (<p>No Contacts Available</p>)}

				</ul>
			</div>
		</div>
	);
}
