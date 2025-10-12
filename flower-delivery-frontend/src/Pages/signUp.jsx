import React, { useState } from "react";

export default function SignUp() {
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic here for submitting form
    alert(`phone: ${phone}, code: ${code}`);
  };

  return (
    <div>
      <div className="inset-0  bg-white/30 md:top-0   md:backdrop-blur-sm flex absolute z-10 top-0"></div>
      <div className="min-h-screen relative z-20  bg-gray-100 flex items-center justify-center ">
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-4">Sign up</h2>
          <p className="text-sm text-gray-600 mb-6">
            Become a member and enjoy personalized gift recommendations, fast
            checkout, and more.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="tel"
                placeholder="+380XXXXXXXXX"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            <div>
              <label htmlFor="">Enter code from SMS</label>
              <input
                type="text"
                placeholder="xx xx xx"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              <p className="text-xs text-gray-500 mt-1">
                Please check your phone for a message containing a code to
                enter.
              </p>
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition duration-300"
            >
              JOIN US
            </button>
            <div className="text-center text-sm text-gray-600 mt-2">
              Didn’t receive a code?{" "}
              <button className="text-black ">Resend code</button>
            </div>
          </form>
          <div className="text-xs text-gray-500 mt-6 text-center">
            <a href="#" className="underline mr-2">
              Privacy Policy
            </a>{" "}
            |
            <a href="#" className="underline ml-2">
              Terms and Conditions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
