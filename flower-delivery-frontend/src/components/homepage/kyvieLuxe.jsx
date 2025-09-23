import React from "react";
// import { FaArrowRight } from "react-icons/fa";
import Blacknwhiteimg from "../../assets/homepage/blacknwhiteimg.svg";
import freshFlowers from "../../assets/homepage/freshFlower.jpg";
import driedFlowers from "../../assets/homepage/driedFlower.png";
import livePlants from "../../assets/homepage/livePlant.png";
import aromaCandles from "../../assets/homepage/aromaCandle.png";
import freshners from "../../assets/homepage/freshners.png";

export default function Hero() {
	const shopItems = [
		{ label: "Fresh Flowers", img: freshFlowers },
		{ label: "Dried Flowers", img: driedFlowers },
		{ label: "Live Plants", img: livePlants },
		{ label: "Aroma Candles", img: aromaCandles },
		{ label: "Freshners", img: freshners },
	];

	return (
		<div className="grid grid-cols-1 md:grid-cols-5 border border-black">
			{/* Left (Hero Text + Image) */}
			<div className="md:col-span-4 flex flex-col justify-start w-1/2 p-4">
				<h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight text-black">
					Kyiv LuxeBouquets
				</h1>
				<p className="mt-4 text-lg text-slate-600 max-w-sm leading-relaxed">
					Discover uniquely crafted bouquets and gifts for any occasion. Spread
					joy with our online flower delivery service.
				</p>

				<div className="mt-8 p-4 flex gap-4 bg-white">
					<img
						src={Blacknwhiteimg}
						alt="Flower showcase"
						className="md:w-full h-56 object-cover "
					/>
					<p className="mt-6 text-base text-slate-700 max-w-md leading-snug">
						Experience the joy of giving with our modern floral studio. Order
						online and send fresh flowers, plants and gifts today.
					</p>
				</div>
			</div>

			{/* Right (Shop Grid) */}
			<div id="shop" className="md:grid grid-cols-1 border border-black   ">
				{shopItems.map((item, idx) => (
					<div key={idx} className="flex  gap-4">
						{/* Image Card */}
						<div className="  overflow-hidden">
							<img
								src={item.img}
								alt={item.label}
								className="w-full h-56 object-cover"
							/>
						</div>
						{/* Label + Shop Now Card */}
						<div className=" p-4 flex flex-col justify-between h-56 w-1/2">
							<span className="text-lg font-bold text-center text-black">
								{item.label}
							</span>
							<button className="mt-auto flex items-center gap-2 text-sm font-medium text-black hover:underline">
								Shop Now
								<span className="inline-block">→</span>
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

// function Luxe() {
// 	return (
// 		<section className="grid grid-cols-1 md:grid-cols 12 gap-8 items-start py-12">
// 			<div className="md:col-span-4 flex flex-col justify-center gap-3">
// 				<h1 className="text-3xl md:text-4xl font-bold leading-tight">
// 					Kyiv LuxeBouquets <span> </span>
// 				</h1>
// 				<p classname="mt-4 text-stone-600 max-w-sm">
// 					Discover Uniquely Crafted Bouquets and Gifts for Any Occasion: Spread
// 					Joy with Our Online Flower Delivery Service
// 				</p>
// 			</div>
// 			<hr className="border-t-1 border-black my-5"></hr>
// 			<div className="flex flex-row items-baseline gap-4 ">
// 				<img src={Blacknwhiteimg} className="w-1/2 md:w-1/3 lg:w-1/4" />
// 				<div className="w-px bg-black h-72"></div>
// 				<p className="mt-3 text-base text-slate-700 leading-snug ">
// 					Experience the joy of giving with our modern floral studio. Order
// 					online and send fresh flowers, plants and gifts today.
// 				</p>
// 			</div>
// 			<hr className="border-t-1 border-black my-5"></hr>
// 			<div id="shop" className="md:col-span-8 grid grid-cols-2 gap-6">
// 				{[
// 					{ label: "Fresh Flowers", img: freshFlowers },
// 					{ label: "Dried Flowers", img: driedFlowers },
// 					{ label: "Live Plants", img: livePlants },
// 					{ label: "Aroma Candles", img: aromaCandles },
// 					{ label: "Freshners", img: freshners },
// 				].map((item, idx) => (
// 					<div
// 						key={idx}
// 						className="relative aspect-square overflow-hidden rounded-lg group shadow"
// 					>
// 						<img
// 							src={item.img}
// 							alt={item.label}
// 							className="w-full h-full object-cover"
// 						/>
// 						<div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
// 							<button className="flex items-center gap-2 bg-white text-black text-xs px-4 py-2 rounded-full shadow">
// 								Shop Now <span className="inline-block">→</span>
// 							</button>
// 							<span className="absolute bottom-3 left-3 text-sm font-medium bg-white/80 px-3 py-1 rounded">
// 								{item.label}
// 							</span>
// 						</div>
// 					</div>
// 				))}
// 			</div>
// 		</section>
// 	);
// }

// export default Luxe;
