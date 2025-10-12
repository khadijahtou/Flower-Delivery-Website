import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layout/mainlayout";
import Home from "./Pages/home";
import AboutUs from "./Pages/aboutUs";

import SignIn from "./components/signIn";
import CategoryPage from "./Pages/Category/CategoryPage";
import ProductPage from "./components/productpage";
import Checkout from "./Pages/checkout";
import CheckoutPage from "./Pages/CheckOut/checkOutpage";
import OrderSummary from "./Pages/CheckOut/orderSummary";
import Payment from "./Pages/CheckOut/payment";
import ShippingDetails from "./Pages/CheckOut/shipping";
import SignUp from "./Pages/signUp";
import ForgotPassword from "./Pages/Resetpassword";
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
      {
        path: "/aboutus",
        element: <AboutUs />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },

      {
        path: "/shipping",
        element: <ShippingDetails />,
      },
      {
        path: "/orderSummary",
        element: <OrderSummary />,
      },
      {
        path: "/payment",
        element: <Payment />,
      },
      {
        path: "/forgotpassword",
        element: <ForgotPassword />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },

  // {
  //   path: "/cart",
  //   element: <Cart />,
  // },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/category",
    element: <CategoryPage />,
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
