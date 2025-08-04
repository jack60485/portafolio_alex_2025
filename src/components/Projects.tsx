import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ExternalLink, Play } from 'lucide-react';
import ProjectModal from "../components/ProjectModal";

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);


  const [projects, setProjects] = useState([]);


  useEffect(() => {
    axios.get('http://localhost:8000/api/projects/')
      .then(response => setProjects(response.data))
      .catch(error => console.error('Error fetching projects:', error));
  }, []);


  const allCategories = [
    'all',
    ...Array.from(new Set(projects.flatMap(p => p.categories.map(c => c.name))))
  ];


  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project =>
        project.categories.some(cat => cat.name === filter)
      );
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
          {allCategories.map((category) => (
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
                      {tag.name}
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
            extraText={selectedProject.extra_text}
            images={selectedProject.extra_images.map((img: any) => img.image)}
            tags={selectedProject.tags}
            detailedDescription={selectedProject.detailed_description}
            videos={selectedProject.videos}
          />
        )}
      </div>
    </section>
  );
};

export default Projects;

