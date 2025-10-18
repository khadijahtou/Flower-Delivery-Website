import React from "react";

function Flowers() {
  const flowers = [
    {
      id: 1,
      name: "Name #1",
      category: "Category #1",
      price: "$100",
      description:
        "Some short text that briefly describes the flower. The description can be anything as this is just a placeholder.",
      image: "Flower Image 1",
    },
    {
      id: 2,
      name: "Name #2",
      category: "Category #1",
      price: "$150",
      description:
        "Some short text that briefly describes the flower. The description can be anything as this is just a placeholder.",
      image: "Flower Image 2",
    },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto mt-8 px-4 lg:p-4">
      {flowers.map((flower) => (
        <div
          key={flower.id}
          className="flex flex-col md:flex-row items-start mb-8 border-b pb-6"
        >
          <div className="w-48 h-48 border border-gray-400 flex items-center justify-center text-gray-500 font-medium mb-4 md:mb-0 md:mr-6">
            {flower.image}
          </div>
          <div>
            <p className="font-semibold">
              <span className="text-black">Name:</span> {flower.name}
            </p>
            <p className="font-semibold">
              <span className="text-black">Category:</span> {flower.category}
            </p>
            <p className="font-semibold">
              <span className="text-black">Price:</span>{" "}
              <span className="text-red-600">{flower.price}</span>
            </p>
            <p className="font-semibold text-black">
              Description:{" "}
              <span className="font-normal text-gray-700">
                {flower.description}
              </span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Flowers;
