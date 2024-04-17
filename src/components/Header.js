import React from "react";

const Header = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
        <span className="block xl:inline dark:text-gray-500">Your Name</span>
        <span className="block text-indigo-600 xl:inline"> Portfolio</span>
      </h1>
      <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
        This is a simple example of an online portfolio using React and Tailwind CSS.
      </p>
    </div>
  );
};

export default Header;