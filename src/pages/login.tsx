import React from "react";

export const Login = () => {
  return (
    <div className="justify-center items-center flex h-screen bg-gray-800">
      <div className="bg-white w-full max-w-lg py-10 rounded-lg text-center">
        <h3 className="font-bold text-lg text-gray-800">Log in</h3>
        <form className="flex flex-col mt-5 px-5">
          <input
            placeholder="Email"
            className="bg-gray-100 shadow-inner focus:outline-none border-2 focus:border-opacity-50 focus:border-green-600 py-3 mb-3 px-2 rounded-lg"
          />
          <input
            placeholder="Password"
            className="bg-gray-100 shadow-inner focus:outline-none border-2 focus:border-opacity-50 focus:border-green-600 py-3 px-2 rounded-lg"
          />
          <button className="py-3 px-5 bg-gray-800 text-white text-lg mt-3 rounded-lg focus:outline-none focus:border-opacity-90">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
