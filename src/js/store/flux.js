import { json } from "react-router";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [
			], /**will eventually hold the contact information retrieved from the API */
		},
		actions: {
			getContacts: () => {
				fetch("https://playground.4geeks.com/contact/agendas/JacobBCabot/contacts")
					.then((resp) => {
						if (!resp.ok) throw Error(resp.statusText);
						return resp.json();
					})
					.then((data) => {
						console.log(data);
						setStore({ contacts: data.contacts });

					})
					.catch((error) => {
						console.log(error);
					})
			},
			addContacts: async (name, phone, email, address) => {
				const store = getStore();
				const response = await fetch(
					"https://playground.4geeks.com/contact/agendas/JacobBCabot/contacts",
					{
						method: "POST",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify({
							name: name,
							phone: phone,
							email: email,
							address: address,
							agenda_slug: "JacobBCabot",
						}),
					}
				);
				const data = await response.json();
				setStore({ contacts: [...store.contacts, data] });
			},
			deleteContact: async (id) => {
				const store = getStore();
				const response = await fetch(
					`https://playground.4geeks.com/contact/agendas/JacobBCabot/contacts/${id}`,
					{
						method: "DELETE",
						headers: { "Content-Type": "application/json" },
					}
				);
				const data = await response.json();
				setStore({
					contacts: store.contacts.filter((contact) => contact.id !== id),
				});
			},
			editContact: async (id, name, phone, email, address) => {
				const store = getStore();
				const response = await fetch(
					`https://playground.4geeks.com/contact/agendas/JacobBCabot/contacts/${id}`,
					{
						method: "PUT",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify({
							name: name,
							phone: phone,
							email: email,
							address: address,
							agenda_slug: "JacobBCabot",
						}),
					}
				);
				const data = await response.json();
				setStore({ contacts: [...store.contacts, data] });
			},
		}
	};
};

export default getState;
