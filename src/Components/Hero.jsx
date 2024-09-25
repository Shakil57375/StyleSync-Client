import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carouselOverride.css"; // Import custom CSS to override slick styles
import { assets } from "../assets/assets";

const Hero = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024, // for tablets and below
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 768, // for mobile devices
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    infinite: true,
                    autoplay: true,
                },
            },
        ],
    };

    return (
        <Slider {...settings} className="mt-8">
            <div className="custom-slider">
                <img
                    src={assets.banner_1}
                    alt={"banner"}
                    className="w-full h-[450px] sm:h-[300px] object-cover rounded-lg"
                />
            </div>
            <div className="custom-slider">
                <img
                    src={assets.banner_4}
                    alt={"banner"}
                    className="w-full h-[450px] sm:h-[300px] object-cover rounded-lg"
                />
            </div>
            <div className="custom-slider">
                <img
                    src={assets.banner_5}
                    alt={"banner"}
                    className="w-full h-[450px] sm:h-[300px] object-cover rounded-lg"
                />
            </div>
            <div className="custom-slider">
                <img
                    src={assets.banner_6}
                    alt={"banner"}
                    className="w-full h-[450px] sm:h-[300px] object-cover rounded-lg"
                />
            </div>
        </Slider>
    );
};

export default Hero;
