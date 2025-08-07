import { assets } from "../../assets/assets";
import Title from "../../components/Title";
import React, { useState } from "react";

function AddRoom() {
  const [images, setImages] = useState({
    1: null,
    2: null,
    3: null,
    4: null,
  });

  const [input, setInput] = useState({
    roomType: "",
    pricePerNight: 0,
    amenities: {
      "Free Wifi": false,
      "Free BreakFast": false,
      "Room Service": false,
      "Mountain View": false,
      "Pool Access": false,
    },
  });

  return (
    <form className="max-w-5xl mx-auto px-4  space-y-10">
      <Title
        align="left"
        font="outfit"
        title="Add Room"
        subTitle="Add new rooms with photos, type, price, and amenities to attract more guests."
      />

      {/* Upload Images */}
      <div>
        <p className="text-lg font-semibold text-gray-800 mb-2">
          Upload Room Images
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {Object.keys(images).map((key) => (
            <label
              htmlFor={`roomImages${key}`}
              key={key}
              className="relative w-full h-24 border border-gray-300 rounded-md cursor-pointer overflow-hidden group bg-gray-50 hover:shadow-md transition"
            >
              <img
                src={
                  images[key]
                    ? URL.createObjectURL(images[key])
                    : assets.uploadArea
                }
                alt={`Room ${key}`}
                className="object-cover w-full h-full group-hover:opacity-80 transition"
              />
              <input
                type="file"
                accept="image/*"
                id={`roomImages${key}`}
                hidden
                onChange={(e) =>
                  setImages({ ...images, [key]: e.target.files[0] })
                }
              />
            </label>
          ))}
        </div>
      </div>

      {/* Room Details */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="text-gray-700 font-medium block mb-2">
            Room Type
          </label>
          <select
            value={input.roomType}
            onChange={(e) => setInput({ ...input, roomType: e.target.value })}
            className="w-full border border-gray-300 bg-white px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Room Type</option>
            <option value="Single Bed">Single Bed</option>
            <option value="Double Bed">Double Bed</option>
            <option value="Luxury Room">Luxury Room</option>
            <option value="Family Suite">Family Suite</option>
          </select>
        </div>

        <div>
          <label className="text-gray-700 font-medium block mb-2">
            Price <span className="text-sm text-gray-500">/night (INR)</span>
          </label>
          <input
            min={0}
            type="number"
            placeholder="Enter Price"
            className="w-full border border-gray-300 px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={input.pricePerNight}
            onChange={(e) =>
              setInput({ ...input, pricePerNight: e.target.value })
            }
          />
        </div>
      </div>

      {/* Amenities */}
      <div>
        <p className="text-xl font-semibold text-gray-800 mb-1">
          Select Amenities
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {Object.keys(input.amenities).map((amenity, index) => (
            <label
              key={index}
              className="flex items-center gap-3 p-3 border border-gray-200 rounded-md bg-gray-50 hover:bg-gray-100 transition cursor-pointer"
            >
              <input
                type="checkbox"
                checked={input.amenities[amenity]}
                onChange={() =>
                  setInput({
                    ...input,
                    amenities: {
                      ...input.amenities,
                      [amenity]: !input.amenities[amenity],
                    },
                  })
                }
              />
              <span className="text-gray-700">{amenity}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Submit */}
      <div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition active:scale-95"
        >
          + Add Room
        </button>
      </div>
    </form>
  );
}

export default AddRoom;
