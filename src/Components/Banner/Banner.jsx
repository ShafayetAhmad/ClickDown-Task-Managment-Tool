import { Link } from "react-router-dom";
import banner from "../../assets/banner.webp";

const Banner = () => {
  return (
    <div className="relative">
      <div className="relative w-full">
        <img
          src={banner}
          className="w-full h-[90vh] object-cover"
          alt="Banner"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-yellow-300 bg-gray-700 text-center rounded-3xl p-10">
            Your Task <br /> Management Solution
          </h1>
        </div>
        <div className="absolute inset-0 flex items-end mb-20 justify-center">
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
