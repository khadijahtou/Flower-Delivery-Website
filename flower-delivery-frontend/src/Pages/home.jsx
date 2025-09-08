import React from "react";
import About from "../components/homepage/about";
import ChooseUs from "../components/homepage/chooseus";
import Luxe from "../components/homepage/kyvieLuxe";
import ContactUs from "../components/homepage/contactus";

function Home() {
	return (
		<div>
			<Luxe></Luxe>
			<About></About>
			<ChooseUs></ChooseUs>
			<ContactUs></ContactUs>
		</div>
	);
}

export default Home;
