import React, { useState } from "react";
import { Link } from "react-router-dom";
import Title from "../Components/Title";
import { assets } from "../assets/assets";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    password: false,
  });
  const [acceptedTerms, setAcceptedTerms] = useState(false); // Added state for Terms and Conditions checkbox

  // Form validation: the form is valid if all fields are filled and terms are accepted
  const isFormValid =
    name.trim() !== "" && email.trim() !== "" && password.trim() !== "" && acceptedTerms;

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleTermsChange = (e) => setAcceptedTerms(e.target.checked); // Handle checkbox change

  return (
    <div className="font-[sans-serif]">
      <div className="min-h-screen flex flex-col items-center justify-center p-6">
        <div className="flex items-center justify-between flex-col lg:flex-row gap-20 max-w-7xl max-lg:max-w-xl w-full shadow-[0_2px_16px_-3px_rgba(6,81,237,0.3)] p-10">
          <div className="h-full max-lg:mt-12">
            <img
              src="https://img.freepik.com/premium-vector/woman-register-online-concept-female-character-stand-large-laptop-logs-social_1002658-3572.jpg"
              className="w-full h-full object-cover"
              alt="Registration Illustration"
            />
          </div>

          <form className="lg:max-w-md w-full">
            <Title title={"Register"}/>
            <div className="space-y-6">
              <div>
                <label className="text-gray-800 text-sm mb-2 block">Name</label>
                <input
                  name="name"
                  type="text"
                  value={name}
                  onChange={handleNameChange}
                  onBlur={() => handleBlur("name")}
                  className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-4 focus:bg-transparent outline-blue-500 transition-all"
                  placeholder="Enter name"
                />
                {touched.name && !name && (
                  <p className="text-red-500 text-xs mt-1">Please add your name</p>
                )}
              </div>

              <div>
                <label className="text-gray-800 text-sm mb-2 block">Email</label>
                <input
                  name="email"
                  type="text"
                  value={email}
                  onChange={handleEmailChange}
                  onBlur={() => handleBlur("email")}
                  className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-4 focus:bg-transparent outline-blue-500 transition-all"
                  placeholder="Enter email"
                />
                {touched.email && !email && (
                  <p className="text-red-500 text-xs mt-1">Please add your email</p>
                )}
              </div>

              <div>
                <label className="text-gray-800 text-sm mb-2 block">Password</label>
                <div className="relative flex items-center">
                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={handlePasswordChange}
                    onBlur={() => handleBlur("password")}
                    className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-4 focus:bg-transparent outline-blue-500 transition-all"
                    placeholder="Enter password"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#bbb"
                    stroke="#bbb"
                    className="w-[18px] h-[18px] absolute right-2 cursor-pointer"
                    viewBox="0 0 128 128"
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    <path
                      d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                      data-original="#000000"
                    ></path>
                  </svg>
                </div>
                {touched.password && !password && (
                  <p className="text-red-500 text-xs mt-1">Please add your password</p>
                )}
              </div>

              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 shrink-0 border-gray-300 rounded"
                  checked={acceptedTerms}
                  onChange={handleTermsChange}
                />
                <label htmlFor="remember-me" className="ml-3 block text-sm text-gray-800">
                  I accept the{" "}
                  <Link to="/termsAndConditions" className="text-blue-600 font-semibold hover:underline ml-1">
                    Terms and Conditions
                  </Link>
                </label>
              </div>
            </div>

            <div className="mt-12">
              <button
                type="button"
                className={`py-4 px-8 text-sm font-semibold text-white tracking-wide rounded-md w-full ${
                  isFormValid
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
                disabled={!isFormValid}
              >
                Create an account
              </button>
            </div>
            <div className="my-4 flex items-center gap-4">
                <hr className="w-full border-gray-300" />
                <p className="text-sm text-gray-800 text-center">or</p>
                <hr className="w-full border-gray-300" />
              </div>

              <button
                type="button"
                className="w-full flex items-center justify-center gap-4 py-3 px-6 text-sm tracking-wide text-gray-800 border border-gray-300 rounded-md bg-gray-50 hover:bg-gray-100 focus:outline-none"
              >
                <img src={assets.google_icon} className="w-6 h-6" alt="" />
                Continue with Google
              </button>
            <p className="text-sm text-gray-800 mt-6">
              Already have an account?{" "}
              <Link className="text-blue-600 font-semibold hover:underline ml-1" to={"/login"}>
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
