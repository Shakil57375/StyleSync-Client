import React from "react";
import { FiRefreshCw, FiCheckCircle, FiHeadphones } from "react-icons/fi"; // Importing icons from react-icons

const Policy = () => {
  return (
    <div className="flex justify-around items-center bg-white py-12 px-4">
      {/* Exchange Policy */}
      <div className="text-center">
        <FiRefreshCw className="text-4xl text-black mx-auto mb-2" /> {/* Icon */}
        <h3 className="text-xl font-semibold text-gray-800">Easy Exchange Policy</h3>
        <p className="text-gray-500">We offer hassle-free exchange policy</p>
      </div>

      {/* Return Policy */}
      <div className="text-center">
        <FiCheckCircle className="text-4xl text-black mx-auto mb-2" /> {/* Icon */}
        <h3 className="text-xl font-semibold text-gray-800">7 Days Return Policy</h3>
        <p className="text-gray-500">We provide 7 days free return policy</p>
      </div>

      {/* Customer Support */}
      <div className="text-center">
        <FiHeadphones className="text-4xl text-black mx-auto mb-2" /> {/* Icon */}
        <h3 className="text-xl font-semibold text-gray-800">Best Customer Support</h3>
        <p className="text-gray-500">We provide 24/7 customer support</p>
      </div>
    </div>
  );
};

export default Policy;
