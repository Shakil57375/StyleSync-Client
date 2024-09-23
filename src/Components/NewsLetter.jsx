const Newsletter = () => {
  return (
    <section className="w-full py-12 bg-white">
      <div className="max-w-4xl mx-auto text-center px-4">
        {/* Heading */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">
          Subscribe now & get 20% off
        </h2>
        <p className="text-gray-600 mb-8 text-sm sm:text-base">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>

        {/* Subscription Form */}
        <div className="flex flex-col sm:flex-row justify-center items-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-auto sm:max-w-md px-4 py-2 mb-4 sm:mb-0 border border-gray-300 focus:outline-none focus:ring focus:border-black"
          />
          <button className="bg-black text-white px-6 py-2 sm:ml-2 hover:bg-gray-800 w-full sm:w-auto">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
