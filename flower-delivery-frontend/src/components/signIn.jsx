import React from "react";

function SignIn() {
  return (
    <div className="lg:grid lg:grid-cols-3 flex flex-col gap-6">
      <div className="flex flex-col gap-6 px-4 py-10 md:p-20 ">
        <div>
          <h2 className="font-semibold md:text-[50px] text-[34px]">
            Greeting! Welcome to luxury gift shop.
          </h2>
        </div>
        <div className="flex flex-col gap-2 ">
          <h3 className="text-[16px]">
            Use your mobile number to sign up or log in
          </h3>
          <input
            type="number"
            className="border border-gray-200 h-14 px-4 w-full"
            placeholder="+380 xx xxx xx xx"
          />
          <button className="w-full h-14 bg-black text-white">Continue</button>
        </div>
        <div>
          <h5 className="text-[16px]">Instantly login or sign up via Google</h5>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
