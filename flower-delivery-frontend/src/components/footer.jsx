import React from "react";
import {
	FaInstagram,
	FaPinterest,
	FaFacebook,
	FaTwitter,
	FaTelegram,
} from "react-icons/fa";
function Footer() {
	return (
		<footer className=" mt-10  ">
			<div className=" h-full grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4  border-black ">
				<div className="border border-black border-r-0 border-b-0 p-4 flex flex-col gap-3 ">
					<p className="text-sm ">
						Remember to offer beautiful flowers from Kyiv LuxeBouquets
						Valentines Day, Mothers Day, Christmas...
					</p>
					<input
						type="email"
						placeholder="Your Email"
						className="border border-gray-300  px-4 py--2 w-full"
					/>
					<button className="bg-black text-white px-4 py-2 w-full">
						REMIND
					</button>
				</div>

				{/* Contact Us */}
				<div className="border border-black border-r-0  px-2  pt-3 flex flex-col gap-3">
					<h3 className="font-semibold text-xl text-gray-400">Contact Us</h3>
					<p className="text-sm text-gray-400">Address</p>
					<p className="text-sm">15/4 Khreshchatyk Street, Kyiv</p>
					<p className="text-sm text-gray-300">Phone</p>
					<span>+38098009977</span>
					<p className="text-sm text-gray-400">General Enquiry</p>
					<p className="text-sm">Luxe.Florist.Studio@gmail.com</p>
					<p className="text-xl text-gray-400">Follow Us</p>
					<div className="flex gap-2 text-xl justify-between col-span-5 p-2 ">
						<FaInstagram className="cursor-pointer hover:text-pink-500 bg-white" />
						<FaPinterest className="cursor-pointer hover:text-red-600 bg-white" />
						<FaFacebook className="cursor-pointer hover:text-blue-600 bg-white" />
						<FaTwitter className="cursor-pointer hover:text-blue-400 bg-white" />
						<FaTelegram className="cursor-pointer hover:text-blue-500 " />
					</div>
				</div>

				{/* Shop */}
				<div className="border border-black border-r-0  px-2 pt-3 flex flex-col gap-3">
					<div>
						<h3 className="font-semibold text-gray-400 text-xl">Shop</h3>
						<ul className="space-y-2 text-sm">
							<li>All Products</li>
							<li>Fresh Flowers</li>
							<li>Dried Flowers</li>
							<li>Live Plants</li>
							<li>Designer Vases</li>
							<li>Aroma Candles</li>
							<li>Freshener Diffuser</li>
						</ul>
					</div>
					<div>
						<h3 className="font-semibold text-gray-600">Service</h3>
						<ul className="space-y-2 text-sm">
							<li>Flower Subscription</li>
							<li>Wedding & Event Decor</li>
						</ul>
					</div>
				</div>
				{/* About Us */}
				<div className="border border-black px-2  pt-3">
					<h3 className="font-semibold text-gray-400 text-xl ">About Us</h3>
					<ul className="space-y-1 text-sm">
						<li>Our Story</li>
						<li>Blog</li>
						<ul>
							<li>Shipping & returns</li>
							<li>Terms & conditions</li>
							<li>Privacy policy</li>
						</ul>
					</ul>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
