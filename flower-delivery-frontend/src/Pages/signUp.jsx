import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const serverUrl = import.meta.env.VITE_SERVER_URL;
export default function SignUp() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await fetch(`${serverUrl}/api/auth/signUp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, name }),
      });
      if (!res.ok) {
        const errorData = await res.json();
        const error = new Error(errorData.message || "Sign up failed");
        error.status = res.status;
        error.data = errorData;
        throw error;
      }
      const data = await res.json();
      toast.success("Sign up successful!");
    } catch (error) {
      console.log(error.data);
      if (error.status === 409) {
        toast.error("Email already exists.");
      } else if (error.status === 400) {
        toast.error("Invalid input. Please check your details and try again.");
      } else {
        toast.error("An error occurred. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <div className="lg:flex lg:flex-row lg:w-full lg:min-h-screen  bg-cover lg:bg-center lg:overflow-hidden ">
      <div className="hidden lg:block inset-0  bg-black/10   lg:backdrop-blur-sm  absolute z-10 top-0"></div>
      <div className="lg:relative lg:z-20  bg-gray-100 lg:flex lg:items-center lg:justify-center lg:min-h-screen  w-full ">
        <div className="bg-white p-6 lg:rounded-lg lg:shadow-md w-full lg:max-w-md">
          <Toaster position="top-right" />
          <h2 className="text-2xl font-semibold mb-4">Sign up</h2>
          <p className="text-sm text-gray-600 mb-6">
            Become a member and enjoy personalized gift recommendations, fast
            checkout, and more.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="spce-y-2">
              {/* <input
                type="tel"
                placeholder="+380XXXXXXXXX"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              /> */}
              <div className="flex flex-col gap-2 ">
                <label htmlFor="">Email</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  name=""
                  id=""
                  placeholder="ENTER YOUR EMAIL"
                  className="border border-gray-300 p-4 "
                />
              </div>
              <div className="flex flex-col gap-2 ">
                <label htmlFor="">Name</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  name=""
                  id=""
                  placeholder="ENTER YOUR NAME"
                  className="border border-gray-300 p-4 "
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="" className="text-[16px]">
                  Password
                </label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  name=""
                  id=""
                  className="border border-gray-300 p-4 w-full "
                />
              </div>
            </div>
            {/* <div>
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
            </div> */}
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition duration-300"
            >
              {isLoading ? "JOINING..." : "JOIN US"}
            </button>
            {/* <div className="text-center text-sm text-gray-600 mt-2">
							Didn’t receive a code?{' '}
							<button className="text-black ">Resend code</button>
						</div> */}
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
