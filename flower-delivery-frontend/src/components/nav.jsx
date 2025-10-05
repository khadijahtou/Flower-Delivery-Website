import React, { useState } from "react";
import { AiOutlineMenu, AiOutlinePinterest } from "react-icons/ai";
import { MdOutlineShoppingBag } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { CiInstagram } from "react-icons/ci";
import { FiFacebook } from "react-icons/fi";
import { SlSocialTwitter } from "react-icons/sl";
import { PiTelegramLogo } from "react-icons/pi";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  function toggleNavBar() {
    setOpen((prev) => !prev);
  }

  return (
    <>
      <header className="">
        <nav className="relative  bg-white border-b">
          <div className="flex w-full lg:hidden">
            <button
              className="lg:hidden p-5 border-secondary border-r"
              onClick={toggleNavBar}
            >
              <AiOutlineMenu className="size-[18px]" />
            </button>
            <Link to="#" className="p-5 border-secondary border-l ml-auto">
              <MdOutlineShoppingBag className="size-[18px]" />
              {/* <IoMdClose /> */}
            </Link>
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
              <Link to={"/cart"} className="p-8 border-secondary">
                Cart
              </Link>
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
                <Link to="#signin" className="text-[18px] md:text-[21px]">
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
              <div className="flex flex-row justify-between  px-4">
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
          <div className="md:inset-0  md:bg-white/30 md:top-0   md:backdrop-blur-sm flex absolute z-10 top-0"></div>
        )}
      </header>
    </>
  );
}
