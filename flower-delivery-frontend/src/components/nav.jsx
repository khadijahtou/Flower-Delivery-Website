import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { MdOutlineShoppingBag } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Navbar() {
	const [open] = useState(false);

	return (
		<header className="sticky top-0 z-50 bg-white border-b">
			<nav>
				<div className="flex w-full lg:hidden">
					<button className="lg:hidden p-5 border-secondary border-r">
						<AiOutlineMenu className="size-[18px]" />
					</button>
					<Link to="#" className="p-5 border-secondary border-l ml-auto">
						<MdOutlineShoppingBag className="size-[18px]" />
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
						<div className="p-8 border-secondary border-r border-l">
							Sign In
						</div>
					</li>
					<li>
						<div className="p-8 border-secondary">Cart</div>
					</li>
				</ul>
			</nav>

			{open && (
				<div className="md:hidden border-t bg-white">
					<ul className="flex flex-col gap-3 px-4 py-4 text-sm font-medium">
						<li>
							<a href="#shop">Shop</a>
						</li>
						<li>
							<a href="#about">About</a>
						</li>
						<li>
							<a href="#services">Services</a>
						</li>
						<li>
							<a href="#testimonials">Testimonials</a>
						</li>
						<li>
							<a href="#contact">Contact</a>
						</li>
					</ul>
				</div>
			)}
		</header>
	);
}
