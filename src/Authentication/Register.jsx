import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div class="font-[sans-serif]">
      <div class="min-h-screen flex fle-col items-center justify-center p-6">
        <div class="flex items-center justify-between flex-col lg:flex-row gap-20 max-w-7xl max-lg:max-w-xl w-full">
          <div class="h-full max-lg:mt-12">
            <img
              src="https://img.freepik.com/premium-vector/woman-register-online-concept-female-character-stand-large-laptop-logs-social_1002658-3572.jpg"
              class="w-full h-full object-cover"
              alt="Dining Experience"
            />
          </div>
          <form class="lg:max-w-md w-full">
            <h3 class="text-gray-800 text-3xl font-extrabold mb-12">
              Registration
            </h3>
            <div class="space-y-6">
              <div>
                <label class="text-gray-800 text-sm mb-2 block">Name</label>
                <input
                  name="name"
                  type="text"
                  class="bg-gray-100 w-full text-gray-800 text-sm px-4 py-4 focus:bg-transparent outline-blue-500 transition-all"
                  placeholder="Enter name"
                />
              </div>
              <div>
                <label class="text-gray-800 text-sm mb-2 block">Email</label>
                <input
                  name="email"
                  type="text"
                  class="bg-gray-100 w-full text-gray-800 text-sm px-4 py-4 focus:bg-transparent outline-blue-500 transition-all"
                  placeholder="Enter email"
                />
              </div>
              <div>
                <label class="text-gray-800 text-sm mb-2 block">Password</label>
                <input
                  name="password"
                  type="password"
                  class="bg-gray-100 w-full text-gray-800 text-sm px-4 py-4 focus:bg-transparent outline-blue-500 transition-all"
                  placeholder="Enter password"
                />
              </div>
              <div class="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  class="h-4 w-4 shrink-0 border-gray-300 rounded"
                />
                <label
                  for="remember-me"
                  class="ml-3 block text-sm text-gray-800"
                >
                  I accept the{" "}
                  <a
                    href="javascript:void(0);"
                    class="text-blue-600 font-semibold hover:underline ml-1"
                  >
                    Terms and Conditions
                  </a>
                </label>
              </div>
            </div>

            <div class="mt-12">
              <button
                type="button"
                class="py-4 px-8 text-sm font-semibold text-white tracking-wide bg-blue-600 hover:bg-blue-700 focus:outline-none"
              >
                Create an account
              </button>
            </div>
            <p class="text-sm text-gray-800 mt-6">
              Already have an account?{" "}
              <Link
                class="text-blue-600 font-semibold hover:underline ml-1"
                to={"/login"}
              >
                Login here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
