import React from 'react';
import { Award, Code, Palette, Zap } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'Blender', level: 90 },
    { name: 'Maya', level: 50 },
    { name: 'Unreal Engine', level: 50 },
    { name: 'Lighting', level: 93 },
    { name: 'Look Development', level: 88 },
    { name: 'Character Animation', level: 92 }
  ];

  const achievements = [
    {
      icon: <Award className="text-mint-200" size={24} />,
      title: "Bachelor's Degree",
      description: "3D Design and Animation, Australia"
    },
    {
      icon: <Palette className="text-orange-300" size={24} />,
      title: "Stylized Visuals",
      description: "Specialized in creating unique visual styles"
    },
    {
      icon: <Code className="text-mint-500" size={24} />,
      title: "Technical Expertise",
      description: "Advanced knowledge in industry-standard tools"
    },
    {
      icon: <Zap className="text-yellow-600" size={24} />,
      title: "Fast Learner",
      description: "Quick to adapt to new technologies and workflows"
    }
  ];

  return (
    <section id="about" className="py-20 bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate 3D designer and animator with a focus on creating compelling visual narratives
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="mb-8">
              <img 
                src="https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Workspace"
                className="w-full h-80 object-cover rounded-xl shadow-lg"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-navy-600 p-6 rounded-lg hover:bg-gray-750 transition-colors duration-300">
                  <div className="mb-3">{achievement.icon}</div>
                  <h3 className="font-semibold text-white mb-2">{achievement.title}</h3>
                  <p className="text-gray-400 text-sm">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">My Journey</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                As a recent graduate with a Bachelor's degree in 3D Design and Animation from Australia, 
                I bring fresh perspectives and cutting-edge techniques to every project. My passion lies 
                in creating stylized visuals that tell compelling stories, whether for animated films, 
                games, or interactive experiences.
              </p>
              <p className="text-gray-300 leading-relaxed">
                With expertise in Blender, Maya, and Unreal Engine, I specialize in lighting, look 
                development, and character design. I believe that great animation combines technical 
                precision with artistic vision to create memorable experiences that resonate with audiences.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Skills & Expertise</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-orange-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-orange-200 to-orange-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;