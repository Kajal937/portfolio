import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'Project 1',
    description: 'A brief description of Project 1.',
    image: '/images/img1.png',
    link: 'https://plumbing-seven-mu.vercel.app/',
  },
  {
    title: 'Project 2',
    description: 'A brief description of Project 2.',
    image: 'https://via.placeholder.com/600x400',
    link: 'https://yourprojectlink.com/project2',
  },
  // Add more projects as needed
];

const ProjectsSection = () => {
  return (
    
    <section className="py-10">
      <h1 className="text-3xl font-bold mb-6">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
