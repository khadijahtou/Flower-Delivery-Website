import React, { useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { PiCaretDown, PiCaretUp } from "react-icons/pi";
import productImage from "../../assets/Fresh/Aroma Candle.png";
import productImage2 from "../../assets/Fresh/Blue Harmony.png";
import CheckOutCard from "../../components/checkOutCard";

function OrderSummary() {
  const orders = [
    {
      id: 1,
      productImg: productImage,
      productName: "SnowFall",
      quantity: 1,
      price: 100,
    },
    // {
    //   id: 2,
    //   productImg: productImage2,
    //   productName: "Banana",
    //   quantity: 1,
    //   price: 100,
    // },
  ];
  const [showDetails, setShowDetails] = useState(false);
  function toggleDetails() {
    setShowDetails((prev) => !prev);
  }
  return (
    <div className="flex flex-col p-4">
      <div>{/* <CheckOutCard></CheckOutCard> */}</div>
      <div className="flex items-center gap-2 lg:hidden">
        <IoCartOutline />
        <span>Show order summary</span>
        <button onClick={toggleDetails}>
          {showDetails ? <PiCaretUp /> : <PiCaretDown />}
        </button>
      </div>
      {showDetails && (
        <div>
          {orders.map((order) => (
            <CheckOutCard
              key={order.id}
              price={order.price}
              productName={order.productName}
              productImg={order.productImg}
              quantity={order.quantity}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default OrderSummary;
