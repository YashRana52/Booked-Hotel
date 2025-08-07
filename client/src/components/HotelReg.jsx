import React from "react";
import { assets, cities } from "../assets/assets";

function HotelReg() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <form className="flex bg-white rounded-xl shadow-lg max-w-4xl w-full overflow-hidden max-md:mx-4">
        {/* Left Image */}
        <img
          src={assets.regImage}
          alt="register"
          className="w-1/2 object-cover hidden md:block"
        />

        {/* Form Right Side */}
        <div className="relative flex flex-col items-center md:w-1/2 p-6 md:p-10 gap-4 text-gray-800">
          {/* Close Icon */}
          <img
            src={assets.closeIcon}
            alt="Close"
            className="absolute top-4 right-4 h-5 w-5 cursor-pointer hover:scale-110 transition"
          />

          <h2 className="text-2xl font-semibold mt-4">Register Your Hotel</h2>

          {/* Hotel Name */}
          <div className="w-full">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-600"
            >
              Hotel Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Type here"
              className="mt-1 w-full px-3 py-2.5 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Phone */}
          <div className="w-full">
            <label
              htmlFor="contact"
              className="block text-sm font-medium text-gray-600"
            >
              Phone
            </label>
            <input
              id="contact"
              type="tel"
              placeholder="Type here"
              className="mt-1 w-full px-3 py-2.5 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Address */}
          <div className="w-full">
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-600"
            >
              Address
            </label>
            <input
              id="address"
              type="text"
              placeholder="Type here"
              className="mt-1 w-full px-3 py-2.5 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* City Dropdown */}
          <div className="w-full">
            <label
              htmlFor="city"
              className="block text-sm font-medium text-gray-600"
            >
              City
            </label>
            <select
              id="city"
              className="mt-1 w-full px-3 py-2.5 rounded border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            >
              <option value="">Select City</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="mt-4 w-full bg-indigo-600 hover:bg-indigo-500 text-white py-2.5 rounded font-medium transition duration-300"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default HotelReg;
