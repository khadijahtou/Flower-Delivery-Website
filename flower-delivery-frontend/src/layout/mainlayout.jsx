import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/nav.jsx";
import Footer from "../components/footer.jsx";

function MainLayout() {
	return (
		<div>
			<Navbar></Navbar>
			<Outlet></Outlet>
			<Footer></Footer>
		</div>
	);
}

export default MainLayout;
