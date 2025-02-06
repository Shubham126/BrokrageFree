import React from "react";
import { Link } from "react-router-dom";

const PhoneNo = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        {/* Header */}
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">
          Login to Continue
        </h2>
        
        {/* Illustration */}
        <div className="flex justify-center mb-6">
          <img
            src="https://via.placeholder.com/150"
            alt="Illustration"
            className="w-24"
          />
        </div>

        {/* Form */}
        <form>
          {/* Mobile Number Field */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Mobile Number
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
              <div className="flex items-center bg-gray-100 px-3">
                {/* Flag */}
                <img
                  src="https://flagcdn.com/w40/in.png" // Replace with the correct flag image URL
                  alt="India"
                  className="w-5 h-3 mr-2"
                />
                <span className="text-gray-600">+91</span>
              </div>
              <input
                type="tel"
                placeholder="Enter Mobile Number"
                className="w-full p-3 focus:outline-none"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full flex items-center justify-center bg-gray-400 text-white py-3 rounded-lg cursor-not-allowed"
            disabled
          >
            Proceed 
            <span className="ml-2">→</span>
          </button>
        </form>

        {/* Footer */}
        <p className="text-gray-600 mt-4 text-center">
          Don’t Have an Account Yet?{" "}
          <Link to="/signup" className="text-blue-500 font-medium">
            Sign Up Here.
          </Link>
        </p>
      </div>
    </div>
  );
};

export default PhoneNo;
