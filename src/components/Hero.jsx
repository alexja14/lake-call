import { lakeImageBase64 } from '../assets/images/lake.js';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="hero-section relative w-full h-[70vh] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900/30 to-primary-600/20 z-10"></div>
      
      <img 
        src={lakeImageBase64} 
        alt="Serene Lake View" 
        className="hero-image w-full h-full object-cover"
      />
      
      <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-white p-4">
        <div className={`max-w-4xl mx-auto text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 text-center drop-shadow-lg">
            Welcome to <span className="text-lake-light">Lake Call</span>
          </h1>
          
          <p className="text-xl md:text-2xl max-w-2xl mx-auto text-center mb-10 text-white/90">
            Your gateway to intelligent assistance and seamless support
          </p>
          
          <div className={`flex flex-wrap justify-center gap-4 mt-8 transition-all delay-300 duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <button className="btn-modern bg-white text-primary-800 hover:bg-white/90 px-8 py-3 rounded-full font-medium shadow-xl">
              Get Started
            </button>
            <button className="btn-modern bg-transparent border-2 border-white/80 text-white px-8 py-3 rounded-full font-medium hover:bg-white/10">
              Learn More
            </button>
          </div>
          
          <div className={`flex justify-center mt-16 transition-all delay-500 duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <div className="glass-effect rounded-full px-6 py-3 flex items-center gap-2">
              <div className="h-2 w-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">50+ Intelligent Agents Available Now</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent"></div>
    </div>
  );
};

export default Hero;