import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ productImage, productName, productPrice, productLink }) {
	return (
		<Link
			to={productLink}
			className="aspect-square flex flex-col text-center p-6 border border-secondary"
		>
			<div className="">
				<img src={productImage} alt={productName} />
			</div>
			<h2 className="mt-auto">{productName}</h2>
			<p>${productPrice}</p>
		</Link>
	);
}

export default ProductCard;
