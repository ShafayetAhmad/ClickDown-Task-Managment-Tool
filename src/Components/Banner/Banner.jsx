import { Link } from "react-router-dom";
import banner from "../../assets/banner.webp";
const Banner = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={banner} className="w-full h-[90vh]" />
        </div>
        <div className="absolute right-72 bottom-16">
          <Link to="/dashboard">
            <button className="btn btn-warning text-black lg:w-48 lg:h-16 lg:text-2xl">
              Let&apos;s Explore
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
