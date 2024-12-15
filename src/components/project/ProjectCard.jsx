import React from 'react';

const ProjectCard = ({ project }) => {
    return (
        <div className="relative overflow-hidden rounded-lg shadow-lg group">
            <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <a
                    href={project.link}
                    className="text-white bg-blue-600 px-4 py-2 rounded-full text-lg font-semibold"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {/* <div className="p-4"> */}
                        <h2 className="text-xl font-semibold">{project.title}</h2>
                        {/* <p className="text-gray-600 mt-2">{project.description}</p> */}
                    {/* </div> */}
                    View
                </a>
            </div>
            <div className="p-4">
        <h2 className="text-xl font-semibold">{project.title}</h2>
        <p className="text-gray-600 mt-2">{project.description}</p>
      </div>
        </div>
    );
};

export default ProjectCard;
