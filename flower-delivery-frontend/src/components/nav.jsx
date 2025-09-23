import React, { useState } from "react";

export default function Navbar() {
	const [open, setOpen] = useState(false);

	return (
		<header className="sticky top-0 z-50 bg-white border-b">
			<nav className="mx-auto max-w-7xl flex items-center justify-between px-4 py-4">
				<div></div>
				<ul className="hidden md:flex items-center gap-6 text-sm font-medium">
					<li>
						<a href="#shop" className="hover:underline">
							Shop
						</a>
					</li>
					<li>
						<a href="#about" className="hover:underline">
							About
						</a>
					</li>
					<li>
						<a href="#services" className="hover:underline">
							Services
						</a>
					</li>
					<li>
						<a href="#testimonials" className="hover:underline">
							Testimonials
						</a>
					</li>
					<li>
						<a href="#contact" className="hover:underline">
							Contact
						</a>
					</li>
				</ul>
				<button
					className="md:hidden p-2"
					onClick={() => setOpen(!open)}
					aria-label="Toggle menu"
				>
					<svg
						width="24"
						height="24"
						fill="none"
						stroke="currentColor"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<path d="M4 7h16M4 12h16M4 17h16" />
					</svg>
				</button>
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
