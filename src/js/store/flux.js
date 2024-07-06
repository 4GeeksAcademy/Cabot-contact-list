const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				},
			],
			contacts:[], /**will eventually hold the contact information retrieved from the API */
		},
		actions: {
			getContacts:() => {
				fetch("https://playground.4geeks.com/contact/docs")
				.then((resp) => {
					if(!resp.ok) throw Error(resp.statusText);
					return resp.json();
				})
				.then((data) => {
					console.log(data);
					setStore({contacts:data});

				})
				.catch((error) => {
					console.log(error);
				})
			}
			}
		}
	};
};

export default getState;
