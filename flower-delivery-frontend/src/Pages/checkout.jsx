import React from "react";
import { TiLockClosedOutline } from "react-icons/ti";
import SnowFall from "../assets/snowfall.svg";
import CheckOutCard from "../components/checkOutCard";
import { Link } from "react-router-dom";

// const [open, setOpen] = useState(false);
// const [active, setActive] = useState(false);
// function toggleShippingDetails() {
//   setOpen((prev) => !prev);
// }
// function toggleCart() {
//   setActive((prev) => !prev);

function Checkout() {
  return (
    <div className="py-6 px-6 lg:w-1/2 md:py-[80px] md:px-[40px] bg-gray-200 flex flex-col gap-6">
      <div className="border-b  border-tertiary">
        <CheckOutCard
          productImg={SnowFall}
          productName="SnowFall"
          quantity={1}
          price={100}
        />
      </div>
      <div className="border-b  border-tertiary flex  flex-col gap-6">
        <div className="flex flex-row justify-between">
          <h4 className="text-[16px]">Subtotal</h4>
          <h5 className="text-[16px]"> $100.00</h5>
        </div>
        <div className="flex flex-row justify-between pb-6">
          <h4 className="text-[16px]">Shipping</h4>
          <h5 className="text-[16px] text-tertiary">
            {" "}
            Calculated at next step
          </h5>
        </div>
      </div>
      <div className="flex flex-row justify-between">
        <h3>Total</h3>
        <h5>$100.00</h5>
      </div>
      <Link to={"/ordersummary"} className="hidden lg:block ">
        <button className="bg-black text-white w-full ">
          CONTINUE TO PAYMENT
        </button>
      </Link>
      <div>
        <button className="flex items-center justify-center mx-auto mt-4 text-sm">
          Secure Checkout{" "}
          <TiLockClosedOutline className="mr-2 text-base text-[24px]" />
        </button>
      </div>
    </div>
  );
}

export default Checkout;
