// src/components/ProjectModal.tsx
import React, { useEffect } from 'react';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  extraText?: string;
  images?: string[];
  tags?: string[];
  detailedDescription?: string;
  videos?: { video_url: string }[];
}

const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, onClose, title, description, extraText = '', images = [], tags = [], detailedDescription = '', videos = [],}) => {
    useEffect(() => {
      // Bloquear scroll del fondo
      if (isOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }

      // 🔸 Cerrar con la tecla ESC
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };

      window.addEventListener('keydown', handleKeyDown);

      return () => {
        document.body.style.overflow = ''; // restaurar scroll
        window.removeEventListener('keydown', handleKeyDown); // limpiar listener
      };
    }, [isOpen, onClose]);




  if (!isOpen) return null;
   // Para evitar que el clic dentro del modal cierre el modal
  const stopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center p-4"
    onClick={onClose} // cierra al hacer clic fuera
    >

      <div className="bg-white rounded-2xl shadow-2xl w-[85vw] h-[85vh] overflow-y-auto p-8"

      onClick={stopPropagation} // evita que el clic dentro cierre el modal
      >
        <h2 className="text-2xl font-bold text-navy-700 mb-4">{title}</h2>
        <p className="text-gray-700 mb-4">{description}</p>


        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, i) => (
              <span key={i} className="bg-orange-200 text-orange-800 px-2 py-1 text-xs rounded">
                {typeof tag === 'string' ? tag : tag.name}
              </span>
            ))}
          </div>
        )}

        {detailedDescription && (
          <div
            className="prose prose-sm md:prose-base max-w-none mb-4 text-gray-800"
            dangerouslySetInnerHTML={{ __html: detailedDescription }}
          />
        )}

        {extraText && (
          <p className="text-gray-700 mb-4 whitespace-pre-line">
            {extraText}
          </p>
        )}
        {images.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {images.map((img, i) => (
              <img key={i} src={img} alt={`Detail ${i}`} loading="lazy" className="rounded-xl" />
            ))}
          </div>
        )}
        {videos.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {videos.map((vid, i) => {
              const url = vid?.video_url;
              if (!url) return null; // Si no hay url, no renderiza nada

              const embedUrl = url.includes("watch?v=")
                ? url.replace("watch?v=", "embed/")
                : url;

              return (
                <div key={i} className="aspect-video">
                  <iframe
                    width="100%"
                    height="100%"
                    src={embedUrl}
                    title={`Video ${i}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-xl"
                  />
                </div>
              );
            })}
          </div>
        )}


        <button
          onClick={onClose}
          className="mt-4 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ProjectModal;
