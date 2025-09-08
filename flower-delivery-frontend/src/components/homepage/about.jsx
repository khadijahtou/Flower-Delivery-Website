import React from "react";

function About() {
	return (
		<div className=" justify-between text-center p-10 flex flex-row gap-50">
			<h1>About Us</h1>
			<div className="flex flex-col gap-4  align-center p-3">
				<h2 className="text-sm text-black">our story</h2>
				<h4>Kyiv LuxeBouquets</h4>
				<p>
					We are a modern local floral studio, which specializes in the design
					and delivery of unique bouquets. We have the best florists who
					carefully select each look, our studio cooperates directly with farms
					for growing different flowers, so we always have fresh flowers, which
					are collected by our florists in exquisite bouquets. We have a
					collection of fresh bouquets, collections of dried bouquets, house
					plants, as well as fragrant candles from luxury brands to create the
					perfect atmosphere. Make someone's day amazing by sending flowers,
					plants and gifts the same or next day. Ordering flowers online has
					never been easier.
				</p>
				<button className="bg-white text-black py-2 px-4 rounded h-10 w-40">
					learn more
				</button>
			</div>
		</div>
	);
}

export default About;
