import React from 'react';
import { ChevronDown, Play } from 'lucide-react';
import logo from '../assets/logo-y-nombre.png';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-yellow-500 "></div>
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-orange-500 rounded-full"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-yellow-500 rounded-full"></div>
        <div className="absolute bottom-32 left-1/3 w-20 h-20 bg-mint-500 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-orange-500 rounded-full"></div>
      </div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-4">
        <div className="mb-8">
            <div className="flex justify-center items-center mb-6">
              <img src={logo} alt="Alex-Logo" className="w-[50px] md:w-[450px] h-auto" />
            </div>
          {/* <p className="text-l md:text-1xl text-black mb-8 leading-relaxed">
            Specializing in stylized visuals, character design, and storytelling
            <br />
            for animation and games
          </p>*/}
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
          <button
            onClick={scrollToProjects}
            className="bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            View My Work
          </button>
            <a
              href="https://youtu.be/7ilbFnglTBk"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-orange-400 hover:text-orange-600 font-semibold py-4 px-8 border border-orange-400 hover:border-orange-600 rounded-lg transition-all duration-300"
            >
              <Play size={20} />
              Watch Reel
            </a>
        </div>
        

        <div className="flex justify-center space-x-8 text-orange-300 text-sm">
          {/*}<div className="text-center">
            <div className="font-bold text-orange-500 text-lg">50+</div>
            <div>Projects</div>
          </div>
          <div className="text-center">
            <div className="font-bold text-orange-500 text-lg">1</div>
            <div>Years Experience</div>
          </div>*/}
          <div className="text-center">
            <div className="font-bold text-orange-500 text-lg">Bachelor</div>
            <div>3D Design & Animation</div>
          </div>
        </div>
      </div>
      
      <button
        onClick={scrollToProjects}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-orange-600 hover:text-orange-400 transition-colors duration-300 animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;