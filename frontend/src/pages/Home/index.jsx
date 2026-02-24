import Image from "../../assets/react.svg";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import RecipeItems from "../../components/RecipeItem";

const Home = () => {
  return (
    <>
      {/* 1. Added flex-col for mobile (stacked) and flex-row for desktop (side-by-side).
        2. Added items-center and justify-between for alignment.
        3. Added responsive padding (p-8 on mobile, px-20 on desktop).
      */}
      <section className="flex flex-col md:flex-row items-center justify-between min-h-[70vh] gap-10 p-8 md:px-20 py-10 overflow-hidden">
        {/* Text Content: Centered on mobile, left-aligned on desktop */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
            Delicious <span className="text-emerald-500">Food Recipes</span>
          </h1>
          <h5 className="text-gray-600 text-lg md:max-w-md">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus quia
            veritatis optio assumenda officia consectetur expedita nihil. Ex,
            sint fuga?
          </h5>
          <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-emerald-200">
            Share this Recipe
          </button>
        </div>

        {/* Image Container: Full width on mobile, half width on desktop */}
        <div className="flex-1 w-full flex justify-center items-center relative">
          {/* Background decoration for the image */}
          <div className="absolute w-64 h-64 bg-emerald-100 rounded-full blur-3xl -z-10"></div>
          <img
            src={Image}
            alt="Hero Recipe"
            className="w-full max-w-75 md:max-w-md h-auto object-contain drop-shadow-2xl animate-pulse-slow"
          />
        </div>
      </section>

      {/* SVG Wave: Made it relative to sit properly at the bottom */}
      <div className="relative -mt-20 md:-mt-40 z-[-1]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#d4f6e8"
            fillOpacity="1"
            d="M0,192L24,202.7C48,213,96,235,144,245.3C192,256,240,256,288,224C336,192,384,128,432,122.7C480,117,528,171,576,186.7C624,203,672,181,720,186.7C768,192,816,224,864,202.7C912,181,960,107,1008,112C1056,117,1104,203,1152,240C1200,277,1248,267,1296,224C1344,181,1392,107,1416,69.3L1440,32L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div>
        <RecipeItems />
      </div>
    </>
  );
};

export default Home;
