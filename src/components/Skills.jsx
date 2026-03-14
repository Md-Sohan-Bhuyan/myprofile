import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const logos = [
    { name: "HTML5", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Vue.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
    { name: "Tailwind", src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
    { name: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "MongoDB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Java", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "C", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
    { name: "C++", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    { name: "PHP", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
    { name: "Git", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  ];

  const skillBadges = [
    { category: "FrontEnd", skills: ["React.js", "Vue.js","Next.js", "Tailwind CSS", "HTML5", "CSS3"] },
    { category: "BackEnd", skills: ["Node.js", "Express", "MongoDB", "Oracle SQL", "JSP", "PHP"] },
    { category: "Languages & Tools", skills: ["JavaScript", "Java", "Python", "C", "C++", "Git", "GitHub"] },
  ];

  return (
    <section id="skills" className="py-24 bg-surface/50 border-y border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 mb-16">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold">My <span className="text-white/50">Skills</span></h2>
          <div className="w-24 h-1 bg-white/20 mx-auto rounded-full"></div>
        </div>

        {/* Categorized Badges */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {skillBadges.map((group, idx) => (
            <motion.div 
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass p-6 rounded-2xl flex flex-col items-center text-center space-y-6 hover:-translate-y-2 transition-transform duration-500"
            >
              <h3 className="text-xl font-semibold text-white/90">{group.category}</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {group.skills.map(skill => (
                  <span 
                    key={skill} 
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-white/70 hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-orange-500 hover:text-white hover:border-transparent hover:scale-110 hover:shadow-[0_0_20px_rgba(236,72,153,0.5)] transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Marquee Section */}
      {/* Marquee Section */}
<div className="max-w-7xl mx-auto overflow-hidden relative">

  {/* Gradients to hide hard edges */}
  <div className="absolute top-0 bottom-0 left-0 w-12 md:w-32 bg-gradient-to-r from-background to-transparent z-10"></div>
  <div className="absolute top-0 bottom-0 right-0 w-12 md:w-32 bg-gradient-to-l from-background to-transparent z-10"></div>

  <div className="flex whitespace-nowrap animate-marquee hover:[animation-play-state:paused] py-3 md:py-4">

    {[...logos, ...logos].map((logo, index) => (
      <div 
        key={`${logo.name}-${index}`} 
        className="px-4 sm:px-6 md:px-8 
        min-w-[90px] sm:min-w-[120px] md:min-w-[150px] 
        flex justify-center items-center 
        opacity-50 hover:opacity-100 
        transition-opacity grayscale hover:grayscale-0"
      >
        <img 
          src={logo.src} 
          alt={logo.name} 
          className="h-10 sm:h-12 md:h-16 w-auto object-contain"
        />
      </div>
    ))}

  </div>
</div>
    </section>
  );
};

export default Skills;
