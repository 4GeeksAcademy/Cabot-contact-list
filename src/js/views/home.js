import React,{useContext} from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { ContactCard } from "../component/contactCard";

export const Home = () => {
	const {store, actions} = useContext(Context)



	return(
	<div className="text-center mt-5">
		{store.contacts.map((contact, index) => {
			return (<ContactCard contact={contact} key={index}/>)
		})}
	</div>
	);
}
