import React from "react";

const Button = ({ text }) => {
  return (
    <button
      className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md"
    >
      <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
      <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
        <div className="flex gap-3 items-center text-white">
          <p>{text}</p>
        </div>
      </span>
    </button>
  );
};

export default Button;
