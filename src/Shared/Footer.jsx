const Footer = () => {
    return (
      <footer className="w-full py-10 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between py-8 items-start md:items-center gap-8">
            {/* Logo and Description */}
            <div className="flex-1 mb-6 md:mb-0">
              <div className="flex items-center space-x-2 text-xl font-semibold mb-4">
                <span className="font-bold">FOREVER</span>
                <span className="text-pink-500">.</span>
              </div>
              <p className="text-gray-600 text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
              </p>
            </div>
  
            {/* Company Links and Get in Touch */}
            <div className="flex flex-col md:flex-row items-start justify-between gap-8 w-full md:w-auto">
              {/* Company Links */}
              <div>
                <h3 className="font-semibold text-lg mb-4">COMPANY</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>
                    <a href="#home" className="hover:text-gray-800">Home</a>
                  </li>
                  <li>
                    <a href="#about" className="hover:text-gray-800">About us</a>
                  </li>
                  <li>
                    <a href="#delivery" className="hover:text-gray-800">Delivery</a>
                  </li>
                  <li>
                    <a href="#privacy" className="hover:text-gray-800">Privacy policy</a>
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
              <a className="text-blue-700 italic font-semibold text-lg" href="https://shakil-s-portfolio-yt9o.vercel.app/">
                shakil
              </a> - All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  