import React, { useState } from "react";
import { FiUploadCloud } from "react-icons/fi";

function Addflower() {
  const [image, setImage] = useState(null);

  return (
    <div className="w-full  mx-auto mt-8 p-5 lg:p-4">
      <h2 className="text-xl font-semibold mb-6">Add Flower</h2>

      <form className="flex flex-col gap-4">
        {/* Image Upload */}
        <div>
          <label className="block font-medium mb-1">Image</label>
          <div className="w-48 h-48 border-2 border-dashed border-gray-400 flex flex-col items-center justify-center text-gray-500 cursor-pointer hover:bg-gray-50">
            <FiUploadCloud className="text-3xl mb-1" />
            <span>Upload</span>
          </div>
        </div>

        {/* Name */}
        <div>
          <label className="block font-medium mb-1">Name</label>
          <input
            type="text"
            className="w-full border border-gray-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        {/* Category and Price */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium mb-1">Category</label>
            <input
              type="text"
              className="w-full border border-gray-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Price</label>
            <input
              type="text"
              className="w-full border border-gray-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block font-medium mb-1">Description</label>
          <textarea
            rows="4"
            className="w-full border border-gray-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-black"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-black text-white font-semibold py-2 px-6 rounded-md hover:bg-gray-800 transition self-center mt-4"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
}

export default Addflower;
