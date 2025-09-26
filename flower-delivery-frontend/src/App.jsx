import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layout/mainlayout";
import Home from "./Pages/home";
import AboutUs from "./Pages/aboutUs";
import Cart from "./Pages/cart";
import CategoryPage from "./Pages/Category/CategoryPage";
import ProductPage from "./components/productpage";
const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: "/category/:categoryName",
				element: <CategoryPage />,
			},
			{
				path: "/product/:productId",
				element: <ProductPage />,
			},
		],
	},
	{
		path: "/aboutus",
		element: <AboutUs />,
	},
	{
		path: "/cart",
		element: <Cart />,
	},
]);
function App() {
	return (
		<RouterProvider router={router} />

		// <div className="bg-red-800 h-screen">
		// 	<h1>Flower Delivery Service</h1>
		// </div>
	);
}

export default App;
