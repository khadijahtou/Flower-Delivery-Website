import React, { useState } from "react";
import { AiOutlineMenu, AiOutlinePinterest } from "react-icons/ai";
import { MdOutlineShoppingBag } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { CiInstagram } from "react-icons/ci";
import { FiFacebook } from "react-icons/fi";
import { SlSocialTwitter } from "react-icons/sl";
import { PiTelegramLogo } from "react-icons/pi";
import { Link } from "react-router-dom";
import rosyDelight from "../assets/rosyDelight.svg";
import CartCard from "./cartCard";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(false);
  function toggleNavBar() {
    setOpen((prev) => !prev);
  }
  function toggleCart() {
    setActive((prev) => !prev);
  }
  return (
    <>
      <header className="sticky z-10 top-0">
        <nav className=" bg-white ">
          <div className="flex w-full lg:hidden">
            <button
              className="lg:hidden p-5 border-secondary border-r"
              onClick={toggleNavBar}
            >
              <AiOutlineMenu className="size-[18px]" />
            </button>
            <button
              className="p-5 border-secondary border-l ml-auto "
              onClick={toggleCart}
            >
              <MdOutlineShoppingBag className="size-[18px]" />
            </button>
          </div>
          <ul className="w-full hidden lg:flex">
            <li>
              <div className="p-8 border-secondary border-r">Shop</div>
            </li>
            <li>
              <div className="p-8 border-secondary border-r">Contact</div>
            </li>
            <li className="ml-auto">
              <Link
                to={"/signIn"}
                className="p-8 border-secondary border-r border-l"
              >
                Sign In
              </Link>
            </li>
            <li>
              <button
                className="p-8 border-secondary  text-center w-full "
                onClick={toggleCart}
              >
                Cart
              </button>
            </li>
          </ul>
        </nav>

        {open && (
          <div className="lg:hidden border-t bg-white absolute top-0 z-20 w-full md:w-1/2 ">
            <ul className="flex flex-col gap-3 px-4 py-4 text-sm font-medium divide-y divide-secondary">
              <button onClick={toggleNavBar}>
                {" "}
                <IoMdClose /> :
              </button>
              <li>
                <Link to="/signIn" className="text-[18px] md:text-[21px]">
                  Sign in
                </Link>
              </li>
              <li>
                <Link to="#shop" className="text-[18px] md:text-[21px]">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="#services" className="text-[18px] md:text-[21px]">
                  Services
                </Link>
              </li>
              <li>
                <a href="#contact" className="text-[18px] md:text-[21px]">
                  Contact
                </a>
              </li>
              <li>
                <Link to={"/aboutus"} className="text-[18px] md:text-[21px]">
                  About Us
                </Link>
              </li>
              <div className="text-secondary flex flex-col gap-4">
                <p className=" font-medium text-sm md:text-[16px]">
                  Shipping & returns
                </p>
                <p className=" font-medium text-sm md:text-[16px]">
                  Terms & conditions
                </p>
                <p className=" font-medium text-sm md:text-[16px]">
                  Privacy policy
                </p>
              </div>
              <div className="flex flex-row items-center justify-between  pt-4">
                <CiInstagram />
                <AiOutlinePinterest />
                <FiFacebook />
                <SlSocialTwitter />
                <PiTelegramLogo />
              </div>
              <div></div>
            </ul>
          </div>
        )}
        {open && (
          <div className="md:inset-0  md:bg-white/30    md:backdrop-blur-sm flex absolute z-10 top-0"></div>
        )}

        {active && (
          <div
            className="relative z-30  top-0 right-0  w-full  min-h-screen justify-end  bg-white
           lg:w-1/2 border border-secondary"
          >
            <div className=" flex flex-row border-b border-secondary md:py-[26px]  md:px-[40px] py-3 px-6">
              <h3 className="text-[16px]">Shopping cart</h3>
              <IoMdClose onClick={toggleCart} className="ml-auto " />
            </div>
            <div className="border-b border-secondary">
              <CartCard
                imgUrl={rosyDelight}
                title="Rosy Delight"
                quantity={1}
                price={100}
              />
            </div>
            <div className="flex flex-row justify-between py-[21px] pl-4 pr-[71px] md:p-[40px] border-b border-secondary">
              <p className="text-[18px]">Subtotal</p>
              <p className="text-[21px]">$100</p>
            </div>
            <div className="md:p-[40px] py-6 px-4 border-b border-secondary">
              <textarea
                placeholder="Gift Message"
                id=""
                className=" w-full h-[120px] border border-transparent hover:border-gray-400"
              ></textarea>
            </div>
            <div className="px-4 py-6 md:px-[40px] md:py-[45px]">
              <p className="text-center text-sm">
                Shipping & taxes calculated at checkout Free standard shipping
                within Kyiv
              </p>
            </div>
            <div className="">
              <Link to="/checkout">
                <button className="w-full bg-black text-white text-center md:h-[56px] h-[46px]">
                  Check Out{" "}
                </button>
              </Link>
            </div>
          </div>
        )}
        {active && (
          <div className="md:inset-0  md:bg-white/30 md:top-0   md:backdrop-blur-sm flex absolute z-10 top-0"></div>
        )}
      </header>
    </>
  );
}
