import React from "react";

function ForgotPassword() {
  return (
    <div className="lg:flex lg:flex-row">
      <div className="inset-0  bg-white/30 md:top-0   md:backdrop-blur-sm  absolute z-10 top-0 hidden lg:block"></div>
      <div className="p-20  relative z-20 items-center justify-center bg-gray-100 lg:min-h-screen flex flex-col gap-10">
        <div>
          <h2 className="md:text-6xl text-[36px]">Reset Your Password</h2>
        </div>
        <form action="">
          <div>
            <p className="text-[16px]">
              Please provide your phone number below to receive a code for
              restoring access to your account
            </p>
            <div className="flex flex-col gap-3">
              <label htmlFor="phone">Enter Your Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="border border-gray-300 w-full h-14"
                placeholder="+380 XX XXX XX XX"
              />
            </div>
            <div className="mt-5">
              <button className="bg-black text-white w-full h-14">
                Continue
              </button>
            </div>
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
      <div className="inset-0  bg-white/30 md:top-0   md:backdrop-blur-sm hidden lg:block absolute z-10 top-0"></div>
    </div>
  );
}

export default ForgotPassword;
