import React from "react";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <div className=" flex flex-col gap-6">
      <div className="flex flex-col gap-6 px-4 py-10 md:p-20 ">
        <div>
          <h2 className="font-semibold md:text-[50px] text-[34px]">
            Greeting! Welcome to luxury gift shop.
          </h2>
        </div>
        <form action="">
          <div className="flex flex-col gap-2 ">
            <h3 className="text-[16px]">
              Use your mobile number to sign up or log in
            </h3>
            <input
              type="number"
              className="border border-gray-200 h-14 px-4 w-full"
              placeholder="+380 xx xxx xx xx"
            />
            <button className="w-full h-14 bg-black text-white">
              Continue
            </button>
          </div>
          <div className="flex flex-col gap-3">
            <h5 className="text-[16px]">
              Instantly login or sign up via Google
            </h5>
            <div className="flex flex-col md:grid md:grid-cols-2 gap-3">
              <button
                type="button"
                className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-md py-2 hover:border-black transition-all"
              >
                <FaApple className="text-lg" />

                <span className="text-sm font-medium">APPLE PAY</span>
              </button>

              <button
                type="button"
                className="flex w-full items-center justify-center gap-2 border border-gray-300 rounded-md py-2 hover:border-black transition-all"
              >
                <FcGoogle className="text-lg text-[#EA4335]" />
                <span className="text-sm font-medium">GOOGLE PAY</span>
              </button>
            </div>
          </div>
        </form>

        <div>
          <p>
            Don't have an account?{" "}
            <Link to="/signup" className="text-sm text-blue-300 underline">
              Sign up
            </Link>
          </p>
          <p>
            <Link
              to="/forgotpassword"
              className="text-sm text-blue-300 underline"
            >
              Forgot Password?
            </Link>
          </p>
        </div>

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
  );
}

export default SignIn;
