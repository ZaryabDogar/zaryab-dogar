// src/components/Projects.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeftIcon, ArrowRightIcon, ArrowTopRightOnSquareIcon, CodeBracketIcon } from '@heroicons/react/24/outline';

const allProjects = [
  {
    id: 1,
    title: "Notes Keeping App",
    link: "https://notebook-tan-three.vercel.app/",
    github: "https://github.com/zaryabdogar/notebook",
    techStack: ["Next.js", "MongoDB", "Express", "Node.js"],
    description: "A full-stack notes keeping app with authentication and a clean UI for managing daily thoughts.",
    image: "https://via.placeholder.com/600x400?text=Notes+App"
  },
  {
    id: 2,
    title: "URL Shortener",
    link: "https://url-shortner-e6kc30u0d-zaryabdogars-projects.vercel.app/",
    github: "https://github.com/zaryabdogar/url-shortner",
    techStack: ["Next.js", "MongoDB", "Node.js", "Express"],
    description: "Create, manage, and share short URLs with click tracking.",
    image: "https://via.placeholder.com/600x400?text=URL+Shortener"
  },
  {
    id: 3,
    title: "Food Delivery App",
    link: "https://zdfood.vercel.app/",
    github: "https://github.com/zaryabdogar/zdfood",
    techStack: ["Next.js", "MongoDB", "Express", "Node.js", "Nodemailer"],
    description: "A fully functional food ordering platform with Gmail verification and email notifications.",
    image: "https://via.placeholder.com/600x400?text=Food+Delivery"
  },
  {
    id: 4,
    title: "E-commerce Platform",
    link: "#",
    github: "#",
    techStack: ["React", "Node.js", "MongoDB", "Stripe"],
    description: "Full-featured online store with payment integration.",
    image: "https://via.placeholder.com/600x400?text=E-commerce"
  },
  {
    id: 5,
    title: "Task Management App",
    link: "#",
    github: "#",
    techStack: ["React", "Firebase", "Tailwind CSS"],
    description: "Real-time collaborative task management solution.",
    image: "https://via.placeholder.com/600x400?text=Task+App"
  }
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const projectsPerPage = 3;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + projectsPerPage >= allProjects.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? allProjects.length - projectsPerPage : prevIndex - 1
    );
  };

  const visibleProjects = allProjects.slice(currentIndex, currentIndex + projectsPerPage);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
          My <span className="text-indigo-600 dark:text-indigo-400">Projects</span>
        </h2>
        
        {/* Slider Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 p-2 rounded-full bg-white dark:bg-gray-800 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          >
            <ArrowLeftIcon className="h-6 w-6 text-gray-700 dark:text-gray-300" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 p-2 rounded-full bg-white dark:bg-gray-800 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          >
            <ArrowRightIcon className="h-6 w-6 text-gray-700 dark:text-gray-300" />
          </button>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: Math.ceil(allProjects.length / projectsPerPage) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * projectsPerPage)}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index * projectsPerPage 
                  ? 'bg-indigo-600 dark:bg-indigo-400' 
                  : 'bg-gray-300 dark:bg-gray-600'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Project Card Component (same as before)
const ProjectCard = ({ project }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all"
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map(tech => (
            <span 
              key={tech} 
              className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-300 text-sm rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3">
          <a 
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 dark:bg-indigo-500 text-white rounded hover:bg-indigo-700 dark:hover:bg-indigo-600 transition flex-1"
          >
            <ArrowTopRightOnSquareIcon className="h-4 w-4" />
            Live Demo
          </a>
          <a 
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-50 dark:hover:bg-gray-700/50 transition flex-1"
          >
            <CodeBracketIcon className="h-4 w-4" />
            Code
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;