import React from "react";
import { useParams } from "react-router-dom";
import FreshFlower from "../../assets/homepage/freshFlower.jpg";
import DriedFlower from "../../assets/homepage/driedFlower.png";
import ProductCard from "../../components/ProductCard";
import LivePlants from "../../assets/homepage/livePlant.png";
import AromaticCandles from "../../assets/homepage/aromaticCandle.png";
import Fresheners from "../../assets/homepage/fresheners.png";

const categories = {
	"fresh-flowers": "Fresh Flower",
	"dried-flowers": "Dried Flower",
	"live-plants": "Live Plant",
	"aromatic-candles": "Aromatic Candle",
	fresheners: "Freshener",
};

function CategoryPage() {
	const { categoryName } = useParams();
	const CategoryImages = {
		"fresh-flowers": FreshFlower,
		"dried-flowers": DriedFlower,
		"live-plants": LivePlants,
		"aromatic-candles": AromaticCandles,
		fresheners: Fresheners,
	};

	if (!categoryName || !categories[categoryName]) {
		return <div>Category not found</div>;
	}
	return (
		<div className="grid lg:grid-cols-2">
			<div
				className={`h-[420px] flex flex-col bg-cover bg-center justify-center items-center`}
				style={{
					backgroundImage: `url(${CategoryImages[categoryName]})`,
				}}
			>
				<h1 className="text-white text-4xl font-bold text-center">
					{categories[categoryName]}
				</h1>
			</div>
			<div className="grid grid-cols-2">
				<ProductCard
					productImage={FreshFlower}
					productLink="/product/1"
					productName={"SnowFall"}
					productPrice={70}
				/>
				<ProductCard
					productImage={DriedFlower}
					productLink="/product/1"
					productName={"Dawn's Delight"}
					productPrice={70}
				/>
				<ProductCard
					productImage={FreshFlower}
					productLink="/product/1"
					productName={"Pink Elegance"}
					productPrice={70}
				/>
				<ProductCard
					productImage={FreshFlower}
					productLink="/product/1"
					productName={"Rustic Charm"}
					productPrice={70}
				/>
				<ProductCard
					productImage={FreshFlower}
					productLink="/product/1"
					productName={"Autumn Symphony"}
					productPrice={70}
				/>
				<ProductCard
					productImage={FreshFlower}
					productLink="/product/1"
					productName={"Rosy Delight"}
					productPrice={70}
				/>
				<ProductCard
					productImage={FreshFlower}
					productLink="/product/1"
					productName={"Serenity"}
					productPrice={89}
				/>
				<ProductCard
					productImage={FreshFlower}
					productLink="/product/1"
					productName={"Blue Harmony"}
					productPrice={55}
				/>
				<ProductCard
					productImage={FreshFlower}
					productLink="/product/1"
					productName={"Mystical Majesty"}
					productPrice={80}
				/>
				<ProductCard
					productImage={FreshFlower}
					productLink="/product/1"
					productName={"Blazing Blossoms"}
					productPrice={70}
				/>
			</div>
		</div>
	);
}

export default CategoryPage;
