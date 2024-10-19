import React from "react";

const NewsLatter = () => {
  return (
    <div class="bg-white font-[sans-serif] p-4">
      <div class="max-w-3xl mx-auto text-center">
        <h3 class="text-gray-800 text-4xl font-extrabold">Newsletter</h3>
        <p class="text-gray-600 text-sm mt-6">
          Subscribe to our newsletter and stay up to date with the latest news,
          updates, and exclusive offers. Get valuable insights. Join our
          community today!
        </p>
        <div class="max-w-lg mx-auto bg-gray-100 flex p-1 rounded-full text-left border focus-within:border-blue-600 focus-within:bg-transparent mt-12">
          <input
            type="email"
            placeholder="Enter your email"
            class="text-gray-800 w-full outline-none bg-transparent text-sm px-4 py-3"
          />
          <button
            type="button"
            class="bg-blue-600 hover:bg-blue-700 transition-all text-white font-semibold text-sm rounded-full px-6 py-3"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLatter;
