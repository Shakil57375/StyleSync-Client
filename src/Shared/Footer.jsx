const Footer = () => {
  return (
    <footer className="w-full py-10 ">
      <div className="flex justify-between py-8 items-center gap-20">
        {/* Logo and Description */}
        <div className="basis-1/2">
          <div className="flex items-center space-x-2 text-xl font-semibold mb-4">
            <span className="font-bold">FOREVER</span>
            <span className="text-pink-500">.</span>
          </div>
          <p className="text-gray-600 text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </div>

        {/* Company Links */}
        <div className="flex items-center justify-between basis-1/2">
          <div>
            <h3 className="font-semibold text-lg mb-4">COMPANY</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>
                <a href="#home" className="hover:text-gray-800">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-gray-800">
                  About us
                </a>
              </li>
              <li>
                <a href="#delivery" className="hover:text-gray-800">
                  Delivery
                </a>
              </li>
              <li>
                <a href="#privacy" className="hover:text-gray-800">
                  Privacy policy
                </a>
              </li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h3 className="font-semibold text-lg mb-4">GET IN TOUCH</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>+8801814265294</li>
              <li>shakil57375@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t mt-8 pt-4 text-center text-sm text-gray-600">
        <p>
          Copyright 2024©{" "}
          <a className="text-blue-700 italic font-semibold text-lg" href="https://shakil-s-portfolio-yt9o.vercel.app/">shakil</a> - All
          Right Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
