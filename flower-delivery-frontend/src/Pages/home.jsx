import React from "react";
import About from "../components/homepage/about";
import ChooseUs from "../components/homepage/chooseus";
import Luxe from "../components/homepage/kyvieLuxe";
import ContactUs from "../components/homepage/contactus";
import Services from "../components/homepage/services";
import Review from "../components/homepage/review";

function Home() {
	return (
		<div>
			<Luxe></Luxe>
			<About></About>
			<ChooseUs></ChooseUs>
			<ContactUs></ContactUs>
			<Services></Services>
			<Review></Review>
		</div>
	);
}

export default Home;
