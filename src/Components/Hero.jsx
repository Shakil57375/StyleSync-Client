import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carouselOverride.css"; // Import custom CSS to override slick styles
import { Link } from "react-router-dom";
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
    };

    return (
        <Slider {...settings} className="mt-8">
                <div
                    className="custom-slider"
                >
                        <img
                            src={assets.banner_1}
                            alt={"banner"}
                            className="w-full h-[450px] object-cover rounded-lg"
                        />
                </div>
                <div
                    className="custom-slider"
                >
                        <img
                            src={assets.banner_2}
                            alt={"banner"}
                            className="w-full h-[450px] object-cover rounded-lg"
                        />
                </div>
                <div
                    className="custom-slider"
                >
                        <img
                            src={assets.banner_3}
                            alt={"banner"}
                            className="w-full h-[450px] object-cover rounded-lg"
                        />
                </div>
        </Slider>
    );
};

export default Hero;