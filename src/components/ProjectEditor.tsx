// src/pages/ProjectEditor.tsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ProjectEditor = () => {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8000/api/projects/')
      .then(res => setProjects(res.data))
      .catch(err => console.error("Error fetching projects:", err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6 text-navy-700">Edit Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => navigate(`/edit/${project.id}`)}
            className="cursor-pointer bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
          >

            <img
              src={project.image}
              alt={project.title}
              className="h-48 w-full object-cover"
            />


            <div className="p-4">
              <h2 className="text-lg font-semibold text-navy-800">
                {project.title}
              </h2>
              <p className="text-sm text-gray-600 truncate">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectEditor;
