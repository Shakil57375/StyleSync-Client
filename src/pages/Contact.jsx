import React, { useState, useEffect } from 'react';

const ContactUs = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  // Use Geolocation API to get the user's location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          setErrorMessage('Unable to retrieve your location. Please allow location access.');
        }
      );
    } else {
      setErrorMessage('Geolocation is not supported by this browser.');
    }
  }, []);

  return (
    <div className="grid md:grid-cols-2 gap-16 items-center relative overflow-hidden p-8 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-3xl max-w-6xl mx-auto bg-white mt-4 font-[sans-serif]">
      <div>
        <h2 className="text-gray-800 text-3xl font-extrabold">Get In Touch</h2>
        <p className="text-sm text-gray-500 mt-4 leading-relaxed">
          Have a specific inquiry or looking to explore new opportunities? Our experienced team is ready to engage with you.
        </p>
        <form>
          <div className="space-y-4 mt-8">
            <input
              type="text"
              placeholder="Full Name"
              className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 outline-none"
            />
            <input
              type="text"
              placeholder="Street"
              className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 outline-none"
            />
            <div className="grid grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="City"
                className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 outline-none"
              />
              <input
                type="text"
                placeholder="Postcode"
                className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 outline-none"
              />
            </div>
            <input
              type="number"
              placeholder="Phone No."
              className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 outline-none"
            />
            <textarea
              placeholder="Write Message"
              className="px-2 pt-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 outline-none"
            ></textarea>
          </div>
          <button
            type="button"
            className="mt-8 flex items-center justify-center text-sm w-full rounded-md px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white"
          >
            Send Message
          </button>
        </form>
        <ul className="mt-4 flex flex-wrap justify-center gap-6">
          <li className="flex items-center text-blue-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16px"
              height="16px"
              fill="currentColor"
              viewBox="0 0 479.058 479.058"
            >
              <path
                d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
              />
            </svg>
            <a href="mailto:info@example.com" className="text-sm ml-4">
              <strong>info@example.com</strong>
            </a>
          </li>
          <li className="flex items-center text-blue-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16px"
              height="16px"
              fill="currentColor"
              viewBox="0 0 482.6 482.6"
            >
              <path
                d="M98.339 320.8c47.6 56.9 104.9 101.7 170.3 133.4 24.9 11.8 58.2 25.8 95.3 28.2 2.3.1 4.5.2 6.8.2 24.9 0 44.9-8.6 61.2-26.3.1-.1.3-.3.4-.5 5.8-7 12.4-13.3 19.3-20 4.7-4.5 9.5-9.2 14.1-14 21.3-22.2 21.3-50.4-.2-71.9l-60.1-60.1c-10.2-10.6-22.4-16.2-35.2-16.2-12.8 0-25.1 5.6-35.6 16.1l-35.8 35.8c-3.3-1.9-6.7-3.6-9.9-5.2-4-2-7.7-3.9-11-6-32.6-20.7-62.2-47.7-90.5-82.4-14.3-18.1-23.9-33.3-30.6-48.8 9.4-8.5 18.2-17.4 26.7-26.1 3-3.1 6.1-6.2 9.2-9.3 10.8-10.8 16.6-23.3 16.6-36s-5.7-25.2-16.6-36l-29.8-29.8c-3.5-3.5-6.8-6.9-10.2-10.4-6.6-6.8-13.5-13.8-20.3-20.1-10.3-10.1-22.4-15.4-35.2-15.4-12.7 0-24.9 5.3-35.6 15.5l-37.4 37.4c-13.6 13.6-21.3 30.1-22.9 49.2-1.9 23.9 2.5 49.3 13.9 80 17.5 47.5 43.9 91.6 83.1 138.7zm-72.6-216.6c1.2-13.3 6.3-24.4 15.9-34l37.3-37.3c5.6-5.6 11.4-8.4 18.2-8.4 6.9 0 14.2 3.6 21.5 10.7 6.6 6.4 13.4 13.5 19.9 20.3 3.3 3.3 6.6 6.7 10 10.2l29.8 29.8c11.3 11.3 11.3 20.7 0 32-3.1 3.1-6.2 6.2-9.3 9.3-8.2 8.3-16.7 16.8-25.3 25.3l-7.3 7.3 2.9 8.3c7.7 22 17.8 40.9 34.9 61.6 31 38.9 62.3 68.4 98.2 89.5 3.6 2.2 7.4 4.3 11.4 6.4l8.1 4.2 6.6-6.6 37.4-37.4c11.1-11.1 21.6-11.1 32.9.2l60.1 60.1c11.4 11.4 11.5 21.5.2 32.9-4.6 4.8-9.4 9.6-14.1 14.1-7 6.8-13.5 13.2-19.4 20.2-12.4 14.9-26.6 21.5-45.7 20.2-33.3-2.2-64.1-15.7-86.5-26.4-63.4-30-117.8-72.6-160.2-128.6-36.4-46.2-61.7-88.5-78.3-132.7-10.3-27.9-14.2-50.7-12.5-69.8z"
              />
            </svg>
            <a href="tel:+880-1716-969787" className="text-sm ml-4">
              <strong>+880 1716 969787</strong>
            </a>
          </li>
        </ul>
      </div>

      <div className="map-container">
        {latitude && longitude ? (
          <iframe
            src={`https://www.google.com/maps/embed/v1/view?key=YOUR_GOOGLE_MAPS_API_KEY&center=${latitude},${longitude}&zoom=14`}
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Google Map"
          ></iframe>
        ) : (
          <p>{errorMessage || 'Fetching your location...'}</p>
        )}
      </div>
    </div>
  );
};

export default ContactUs;
