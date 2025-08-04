import { useEffect, useState } from 'react';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/projects/')
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(error => console.error("Error fetching projects:", error));
  }, []);

  return (
    <div>
      <h1>My Projects</h1>
      {projects.map((project) => (
        <div key={project.id}>
          <h2>{project.title}</h2>
          <img src={`http://localhost:8000${project.image}`} alt={project.title} width={300} />
          <p>{project.description}</p>
          <div>
            <strong>Tags:</strong> {project.tags.map(tag => tag.name).join(", ")}
          </div>
          <div>
            <strong>Categories:</strong> {project.categories.map(cat => cat.name).join(", ")}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
