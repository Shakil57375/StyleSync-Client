import { Swiper, SwiperSlide } from 'swiper/react'; 
import { Navigation, Pagination } from 'swiper/modules';  // Updated import path for v8+
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { assets } from '../assets/assets';
import "./Testimonial.css"
const Testimonials = () => {
  const testimonials = [
    {
      name: 'Tom Koch',
      role: 'Developer',
      image: assets.user_1, // Replace with actual path
      message:
        'When our designs need an expert opinion or approval, I know I can rely on your agency. Thank you for all your help—I will be recommending you to everyone.',
    },
    {
      name: 'Alan Max',
      role: 'Designer',
      image: assets.user_2, // Replace with actual path
      message:
        'When our designs need an expert opinion or approval, I know I can rely on your agency. Thank you for all your help—I will be recommending you to everyone.',
    },
    {
      name: 'Kera Joo',
      role: 'Support',
      image: assets.user_3, // Replace with actual path
      message:
        'When our designs need an expert opinion or approval, I know I can rely on your agency. Thank you for all your help—I will be recommending you to everyone.',
    },
    {
      name: 'Kera Joo',
      role: 'Support',
      image: assets.user_3, // Replace with actual path
      message:
        'When our designs need an expert opinion or approval, I know I can rely on your agency. Thank you for all your help—I will be recommending you to everyone.',
    },
  ];

  return (
    <section className="testimonials py-16 px-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">Testimonials</h2>
        <p className="text-xl">What our clients say</p>
      </div>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 2,
          },
        }}
        className="testimonial-carousel"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className="p-6">
            <div className="border p-6 rounded-lg shadow-md text-center max-w-xl">
              <p className="text-lg mb-4">{testimonial.message}</p>
              <div className="flex items-center justify-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mb-4"
                />
              </div>
              <h3 className="text-xl font-semibold">{testimonial.name}</h3>
              <p className="text-gray-500">{testimonial.role}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
