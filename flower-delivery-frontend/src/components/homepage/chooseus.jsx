import React from "react";

function ChooseUs() {
	return (
		<div>
			<h2>Why Choose Us?</h2>
			<div className="flex flex-col gap-4">
				<div>
					<h3>Stylish bouquets by florists</h3>
					<p>
						At our floral studio, our professional florists craft the most
						elegant and stylish bouquets using only the freshest and highest
						quality materials available. We stay up-to-date with the latest
						floral design trends and offer unique arrangements that are sure to
						impress. Let us brighten up your day with our stunning bouquets and
						same-day delivery service.
					</p>
				</div>

				<div>
					<h3>On-time delivery</h3>
					<p>
						Never miss a moment with our on-time flower delivery service. Our
						couriers will deliver your bouquet personally, without boxes, to
						ensure it arrives in perfect condition. Trust us to deliver your
						thoughtful gift reliably.
					</p>
				</div>
				<div>
					<h3>Safe payment</h3>
					<p>
						{" "}
						You can feel secure when placing an order with us, as we use
						industry-standard security measures to protect your payment
						information. Your transaction will be safe and hassle-free, so you
						can shop with confidence.
					</p>
				</div>
				<div>
					<h3>Subscription by your needs</h3>
					<p>
						{" "}
						With our subscription service tailored to your specific needs, you
						can enjoy the convenience of having beautiful bouquets delivered
						straight to your door at regular intervals. Our flexible service is
						perfect for busy individuals or those who want to ensure they always
						have fresh flowers on hand. You'll save time and money with this
						hassle-free solution to your floral needs.
					</p>
				</div>
			</div>
		</div>
	);
}

export default ChooseUs;
