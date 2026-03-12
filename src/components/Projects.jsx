import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-Voting System",
      description: "Developed a secure online voting platform with real-time vote counting and result visualization. Implemented user authentication, vote tracking, and admin dashboard.",
      tech: ["HTML5", "CSS3", "JavaScript", "Java", "JSP", "Oracle SQL"],
      image: "/image/portfolio1.jpg"
    },
    {
      title: "Blood Donation Management",
      description: "Comprehensive platform connecting donors with recipients. Features location-based search, donor registration, and real-time request management.",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
      image: "/image/portfolio2.jpg"
    },
    {
      title: "Service Connector Platform",
      description: "Dynamic marketplace connecting service providers with customers. Includes service listing, booking, payment integration, and reviews.",
      tech: ["React.js", "Tailwind CSS", "Node.js", "MongoDB"],
      image: "/image/portfolio3.jpg"
    },
    {
      title: "E-Health Management",
      description: "Healthcare platform for managing records, appointments, and history. Features doctor-patient communication and analytics dashboard.",
      tech: ["HTML5", "Tailwind CSS", "Node.js", "MongoDB"],
      image: "/image/portfolio4.jpg"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-surface/50 border-y border-white/5 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center space-y-4 mb-20">
          <h2 className="text-3xl md:text-5xl font-serif font-bold">Latest <span className="text-white/50">Projects</span></h2>
          <div className="w-24 h-1 bg-white/20 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {projects.map((project, idx) => (
            <motion.div 
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex flex-col space-y-6 group"
            >
              {/* Tablet Mockup */}
              <div className="relative glass rounded-[2rem] p-3 border border-white/10 overflow-hidden shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-white/20 rounded-full"></div>
                
                <div className="w-full h-[250px] md:h-[350px] bg-background rounded-2xl overflow-hidden relative border border-white/5 mt-3">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/800x600/111111/444444?text=" + project.title.replace(/ /g, '+');
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8 gap-4">
                    <a href="#" className="flex items-center gap-2 bg-white text-background px-4 py-2 rounded-full font-semibold hover:bg-white/90 transition-colors">
                      <ExternalLink className="w-4 h-4" /> Live
                    </a>
                    <a href="https://github.com/Md-Sohan-Bhuyan" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-white/10 backdrop-blur-md text-white border border-white/20 px-4 py-2 rounded-full font-semibold hover:bg-white/20 transition-colors">
                      <Github className="w-4 h-4" /> Github
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4 px-2">
                <h3 className="text-2xl font-bold text-white group-hover:text-white/80 transition-colors">{project.title}</h3>
                <p className="text-white/60 leading-relaxed min-h-[80px]">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map(t => (
                    <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-white/50">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
