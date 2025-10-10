import React from "react";
import Breadcrumb from "../../components/breadcrumbs";

function Payment() {
  return (
    <div>
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-md">
        <Breadcrumb />

        {/* Completed Sections */}
        <div className="flex items-center justify-between border-b pb-2 mb-4">
          <div className="flex items-center gap-2">
            <IoCheckmark className="text-green-600 text-xl" />
            <p className="text-gray-800 font-medium">Contact information</p>
          </div>
          <button className="text-gray-500 hover:text-black text-lg">
            <FiEdit2 />
          </button>
        </div>

        <div className="flex items-center justify-between border-b pb-2 mb-4">
          <div className="flex items-center gap-2">
            <IoCheckmark className="text-black text-xl" />
            <p className="text-gray-800 font-medium">Shipping details</p>
          </div>
          <button className="text-gray-500 hover:text-black text-lg">
            <FiEdit2 />
          </button>
        </div>

        {/* Payment Form */}
        <h2 className="text-lg font-semibold mb-2">3 Payment</h2>
        <p className="text-sm text-gray-600 mb-4">
          Pay by card. Your payment is secure.
        </p>

        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Card Number"
            className="border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:border-black"
          />

          <div className="grid grid-cols-2 gap-3">
            <input
              type="text"
              placeholder="MM / YY"
              className="border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:border-black"
            />
            <input
              type="text"
              placeholder="CVV Code"
              className="border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:border-black"
            />
          </div>

          <button
            type="submit"
            className="mt-2 bg-black text-white py-3 text-center text-sm font-medium hover:bg-gray-800 transition-all"
          >
            MAKE A PURCHASE
          </button>

          <div className="text-center text-sm text-gray-500 mt-4">
            Or pay using:
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              className="flex items-center justify-center gap-2 border border-gray-300 rounded-md py-2 hover:border-black transition-all"
            >
              <FaApple className="text-lg" />
              <span className="text-sm font-medium">APPLE PAY</span>
            </button>

            <button
              type="button"
              className="flex items-center justify-center gap-2 border border-gray-300 rounded-md py-2 hover:border-black transition-all"
            >
              <FaGoogle className="text-lg text-[#EA4335]" />
              <span className="text-sm font-medium">GOOGLE PAY</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Payment;
