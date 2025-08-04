// src/pages/EditProjectDetail.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import BlockEditor from '../components/BlockEditor';

const EditProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [formData, setFormData] = useState({
    title: 'Nuevo título',
    description: 'indicar descripcion',
    extra_text: '',
    detailed_description: '',
  });

  useEffect(() => {
    axios.get(`http://localhost:8000/api/projects/${id}/`)
      .then(res => {
        const { title, description, extra_text, detailed_description } = res.data;
        setProject(res.data);
        setFormData({
          title,
          description,
          extra_text: extra_text || '',
          detailed_description: detailed_description || '',
        });
      })
      .catch(err => console.error('Error loading project:', err));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedData = {
      title: formData.title,
      description: formData.description,
      extra_text: formData.extra_text,
      detailed_description: formData.detailed_description,
    };
    axios.put(`http://localhost:8000/api/projects/${id}/`, updatedData)
      .then(() => alert('Project updated!'))
      .catch(err => {
        console.error('Error during update:', err.response?.data || err.message);
        alert('Update failed.');
      });
  };

  if (!project) return <p className="p-8 text-gray-500">Loading project...</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow rounded-xl">
      <h2 className="text-2xl font-bold mb-4 text-navy-700">Editing: {project.title}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>

        <div>

          <label className="block font-semibold text-gray-700">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={3}
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block font-semibold text-gray-700">Extra Text</label>
          <textarea
            name="extra_text"
            value={formData.extra_text}
            onChange={handleChange}
            rows={2}
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block font-semibold text-gray-700">Detailed Description (HTML)</label>
          <textarea
            name="detailed_description"
            value={formData.detailed_description}
            onChange={handleChange}
            rows={6}
            className="w-full border p-2 rounded font-mono"
          />
        </div>

        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded"
        >
          Save Changes
        </button>
      </form>

      <div className="mt-12">
        <BlockEditor projectId={id} />
      </div>
    </div>
  );
};

export default EditProjectDetail;