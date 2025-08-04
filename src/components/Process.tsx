import React from 'react';
import { Lightbulb, Palette, Play, Sparkles } from 'lucide-react';

const Process: React.FC = () => {
  const steps = [
    {
      icon: <Lightbulb size={32} />,
      title: "Concept & Ideation",
      description: "Brainstorming and sketching initial ideas, creating mood boards and reference materials"
    },
    {
      icon: <Palette size={32} />,
      title: "Modeling & Design",
      description: "Building 3D models, sculpting characters, and creating detailed environments"
    },
    {
      icon: <Sparkles size={32} />,
      title: "Look Development",
      description: "Developing materials, textures, and lighting to achieve the perfect stylized look"
    },
    {
      icon: <Play size={32} />,
      title: "Animation & Polish",
      description: "Bringing everything to life with smooth animation and final rendering touches"
    }
  ];

  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-comic font-bold text-navy-800 mb-4">
            My Creative Process
          </h2>
          <p className="text-xl font-comic text-navy-600 max-w-2xl mx-auto">
            From initial concept to final render, here's how I bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group text-center hover:transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-orange-100 to-yellow-100 rounded-3xl flex items-center justify-center text-orange-600 group-hover:from-orange-500 group-hover:to-yellow-500 group-hover:text-white transition-all duration-300 shadow-lg group-hover:shadow-xl">
                  {step.icon}
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-mint-400 rounded-full text-white font-comic font-bold text-sm flex items-center justify-center">
                  {index + 1}
                </div>
              </div>
              
              <h3 className="text-lg font-comic font-bold text-navy-800 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                {step.title}
              </h3>
              
              <p className="text-navy-600 font-comic text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;