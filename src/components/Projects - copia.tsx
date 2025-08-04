import React, { useState } from 'react';
import axios from 'axios';
import { ExternalLink, Play } from 'lucide-react';
import ProjectModal from "../components/ProjectModal";

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);


  const projects = [
  {
    id: 1,
    title: "Juangerardopolis",
    categories: ["motion"],
    description: "Title animation for a fictional documentary using Blender's text animation and particle system.",
    image: "/images/juangerardopolis.png",
    tags: ["Blender", "Text Animation", "Particles"]
  },
  {
    id: 2,
    title: "Domino's Halloween Promo",
    categories: ["lighting"],
    description: "University project simulating a front-door delivery scene with Halloween theme using modeling, texturing, and lighting.",
    image: "/images/dominos.png",
    tags: ["Blender", "Lighting", "Texturing"]
  },
  {
    id: 3,
    title: "Boss Coffee Commercial",
    categories: ["motion"],
    description: "University commercial combining real footage with 3D transitions, particle effects, and coffee bean simulations.",
    image: "/images/bosscoffee.png",
    tags: ["Blender", "VFX", "Filmmaking"]
  },
  {
    id: 4,
    title: "Lighting Practice Scene",
    categories: ["lookdev", "lighting"],
    description: "University task for Lighting & LookDev where I textured and lit a static scene using Substance 3D and Blender.",
    image: "/images/bunnylookdev.png",
    tags: ["Blender", "Substance", "Lighting"]
  },
  {
    id: 5,
    title: "Warrior Gate Integration",
    categories: ["lookdev", "character", "lighting"],
    description: "3D warriors and monster integrated into a real video using render passes, lighting, and shadows.",
    image: "/images/warriorintegration.png",
    tags: ["Compositing", "LookDev", "Footage Integration"]
  },
  {
    id: 6,
    title: "Basketball Corridor",
    categories: ["animation","lighting"],
    description: "Personal short animation where a mysterious hallway leads to an explosion of bouncing basketballs.",
    image: "/images/basketballs.png",
    tags: ["Modeling", "Particles", "Animation"]
  },
  {
    id: 7,
    title: "Buñuelos Simulation",
    categories: ["lookdev"],
    description: "Realistic fried dough simulation using Blender fluid and shading tools. Short personal experiment.",
    image: "/images/bunuelos.png",
    tags: ["Simulation", "Shading", "LookDev"]
  },
  {
    id: 8,
    title: "Third World Diorama",
    categories: ["modeling","lighting"],
    description: "Stylized nighttime diorama with moving cars, fog, and vibrant lighting, entirely modeled from scratch.",
    image: "/images/diorama.png",
    tags: ["Modeling", "Stylized", "Lighting"]
  },
  {
    id: 9,
    title: "Bike Detail Render",
    categories: ["modeling", "lighting"],
    description: "Realistic 3D model of a classic bike with careful attention to textures and lighting.",
    image: "/images/bike.png",
    tags: ["Modeling", "Realism", "Cycles"]
  },
  {
    id: 10,
    title: "Fish Watching TV",
    categories: ["animation", "character", "modeling"],
    description: "Short animation featuring a rigged fish character watching TV. Full pipeline including rigging and animation.",
    image: "/images/fishtv.png",
    tags: ["Rigging", "Animation", "Character"]
  },
  {
  id: 11,
  title: "Robotic Painter",
  categories: ["animation", "character"],
  description: "University project focused on rigging and animation of a robotic arm. I added smaller props to simulate a painting scene.",
  image: "/images/roboticpainter.png",
  tags: ["Rigging", "Animation", "Character"]
}

];

  //const categories = ['all', 'lighting', 'character', 'animation']; old
  const categories = ['all', 'lighting', 'character', 'animation', 'lookdev', 'motion', 'modeling'];


  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.categories?.includes(filter));
  return (
    <section id="projects" className="py-20 bg-navy-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Título */}

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A collection of my best work in lighting, look development, and animation
          </p>
        </div>
        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 capitalize ${
                filter === category 
                  ? 'bg-gradient-to-r from-orange-400 to-orange-700 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        {/* Tarjetas de proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group bg-navy-600 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>




                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-full transition-colors duration-200"
                  onClick={() => setSelectedProject(project)}
                  >


                    <Play size={16} />
                  </button>
                  <button className="bg-mint-500 hover:bg-mint-600 text-white p-2 rounded-full transition-colors duration-200">
                    <ExternalLink size={16} />
                  </button>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-orange-400 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
                {/* Modal visible */}
        {selectedProject && (
          <ProjectModal
            isOpen={true}
            onClose={() => setSelectedProject(null)}
            title={selectedProject.title}
            description={selectedProject.description}
            images={selectedProject.images}
            tags={selectedProject.tags}
          />
        )}
      </div>
    </section>
  );
};

export default Projects;