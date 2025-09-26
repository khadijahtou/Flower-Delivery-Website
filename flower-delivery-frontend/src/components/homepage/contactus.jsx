import React from "react";
import {
	FaMapMarkerAlt,
	FaPhoneAlt,
	FaFacebook,
	FaInstagram,
	FaTwitter,
	FaPinterest,
	FaTelegram,
} from "react-icons/fa";
import Kyiv from "../../assets/homepage/kyivluxe.png";

function ContactUs() {
	return (
		<section className="grid grid-cols-1 md:grid-cols-2 border border-black">
			<div className="flex flex-col gap-5 ">
				<div className="flex flex-col gap-2">
					<h2 className="text-2xl font-semibold">To Contact Us</h2>
					<p className="text-sm">We will call you back</p>
					<div className="flex flex-row gap-2">
						<input
							type="number"
							placeholder="+380 XX XXX XX XX"
							className="border border-gray-400 px-4 py-2 h-10 w-52"
						/>
						<button className="bg-black text-white px-4 py-2 w-40 h-10">
							Book A Call
						</button>
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 border border-black h-full">
					<div className="border border-black text-center p-2">
						<h3 className="border-b border-black font-semibold">Phone</h3>
						<div className="flex flex-col items-center gap-2 mt-2">
							<p className="flex items-center gap-2">
								<FaPhoneAlt /> +380980099777
							</p>
							<p className="flex items-center gap-2">
								<FaPhoneAlt /> +380980099111
							</p>
						</div>
					</div>

					<div className=" border border-black text-center p-2 ">
						<h3 className="border-b border-black font-semibold ">Address</h3>
						<div className="mt-2 flex flex-col items-center gap-2">
							<h4 className="font-medium">OPENING HOURS: 8 TO 11P.M.</h4>
							<div className="flex items-center gap-2">
								<FaMapMarkerAlt />
								<span>15/4 Khreshchatyk Street, Kyiv</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="border border-secondary flex flex-col">
				<img src={Kyiv} alt="Kyiv LuxeBouquets" className="w-full" />
				<div className="grid grid-cols-6 items-center border-t border-secondary ">
					<h3 className="font-semibold border-r border-secondary text-center p-2">
						Follow us
					</h3>
					<div className="flex gap-4 text-2xl justify-center col-span-5 p-2">
						<FaFacebook className="cursor-pointer hover:text-blue-600" />
						<FaInstagram className="cursor-pointer hover:text-pink-500" />
						<FaTwitter className="cursor-pointer hover:text-blue-400" />
						<FaPinterest className="cursor-pointer hover:text-red-600" />
						<FaTelegram className="cursor-pointer hover:text-blue-500" />
					</div>
				</div>
			</div>
		</section>
	);
}
export default ContactUs;
