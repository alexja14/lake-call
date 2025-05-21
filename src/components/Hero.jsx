import { lakeImageBase64 } from '../assets/images/lake.js';

const Hero = () => {
  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      <img 
        src={lakeImageBase64} 
        alt="Serene Lake View" 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white p-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-center">
          Welcome to Lake Call
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl text-center">
          Your gateway to intelligent assistance and seamless support
        </p>
      </div>
    </div>
  );
};

export default Hero;