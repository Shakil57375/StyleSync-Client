import React from "react";
import { assets } from "../assets/assets";
import Testimonials from "../Components/Testimonial";
import NewsLatter from "../Components/NewsLatter";
const AboutUs = () => {
  return (
    <div className="w-full">
      {/* Hero Banner Section */}
      <section className="relative h-[500px]">
        <video
          className="w-full h-full object-cover"
          src={assets.about_us_vd}
          autoPlay
          muted
          loop
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white p-4">
          <h1 className="text-4xl font-bold mb-4">
            Bringing You Style, Syncing with Technology
          </h1>
          <p className="text-lg">
            Discover, shop, and sync with your style at StyleSync.
          </p>
        </div>
      </section>

      {/* How StyleSync Works Section */}
      <section className="py-16 px-8 bg-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">How StyleSync Works</h2>
          <p className="text-lg mb-8">
            At StyleSync, we aim to provide a seamless and enjoyable shopping
            experience. Here's how it works:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="work-item text-center p-6 border rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">
                1. Browse Our Collection
              </h3>
              <p className="text-lg">
                Explore a wide range of tech gadgets, fashion accessories, and
                lifestyle products that are curated to match your style.
              </p>
            </div>
            <div className="work-item text-center p-6 border rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">
                2. Easy and Secure Checkout
              </h3>
              <p className="text-lg">
                Add your favorite items to the cart, and check out in just a few
                clicks using our secure and user-friendly payment gateway.
              </p>
            </div>
            <div className="work-item text-center p-6 border rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">3. Fast Delivery</h3>
              <p className="text-lg">
                Once your order is placed, our team ensures fast and reliable
                delivery so you can enjoy your purchases quickly.
              </p>
            </div>
          </div>
          {/* Add Image of How StyleSync Works */}
          <img
            className="mt-8 mx-auto w-full max-w-4xl h-auto rounded-lg shadow-md"
            src={assets.about_us_img_how_it_works_img}
            alt="How StyleSync Works"
          />
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="py-16 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Innovation Meets Style</h2>
          <p className="text-lg mb-8">
            Our mission is simple: to provide products that keep you connected
            to the future while keeping your style game strong. Our vision is to
            build a global community of customers who don't have to choose
            between aesthetics and innovation.
          </p>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-16 px-8 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">
            Explore Our Collections
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="offer-item text-center p-6 border rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Tech</h3>
              <p className="text-lg">
                From wireless earbuds to mobile accessories, explore products
                designed to keep you connected.
              </p>
            </div>
            <div className="offer-item text-center p-6 border rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Fashion</h3>
              <p className="text-lg">
                Keep up with the latest trends with our stylish clothing and
                accessories collections.
              </p>
            </div>
            <div className="offer-item text-center p-6 border rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">
                Home and Lifestyle
              </h3>
              <p className="text-lg">
                Coming soon! Electric furniture and smart home products to
                enhance your living space.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-16 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            What Our Customers Are Saying
          </h2>
          <Testimonials />
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 px-8 bg-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">What Drives Us</h2>
          <p className="text-lg mb-8">
            We are committed to innovation, sustainability, and providing
            top-tier customer satisfaction. Join us as we build a community of
            stylish and tech-savvy individuals.
          </p>
          <img
            className="w-full h-auto max-w-4xl mx-auto rounded-lg shadow-md"
            src={assets.about_us_img}
            alt="Our Values"
          />
        </div>
      </section>

      {/* Join the Sync Section */}
      <section className="py-16 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Be a Part of the StyleSync Community
          </h2>
          <p className="text-lg mb-6">
            Join us on social media and stay updated with the latest trends,
            exclusive offers, and new product launches.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-blue-600 hover:text-blue-800">
              Facebook
            </a>
            <a href="#" className="text-blue-600 hover:text-blue-800">
              Instagram
            </a>
            <a href="#" className="text-blue-600 hover:text-blue-800">
              Twitter
            </a>
          </div>
        </div>
      </section>
      <NewsLatter />
    </div>
  );
};

export default AboutUs;
