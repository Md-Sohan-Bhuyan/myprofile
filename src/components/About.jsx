import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto space-y-12"
        >
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-serif font-bold">About <span className="text-white/50">Me</span></h2>
            <div className="w-24 h-1 bg-white/20 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 text-white/70 leading-relaxed text-lg">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white">Why Hire Me?</h3>
              <p>
                I don't just write code—I solve problems. I approach each project with a solution-oriented mindset, focusing on how technology can improve real user experiences and business outcomes. From front-end to back-end, UI/UX to SEO, and even blockchain—my diverse skill set allows me to adapt quickly, collaborate effectively, and contribute at every stage of a project.
              </p>
              <p>
                I've worked on practical, impact-driven projects such as e-voting systems, social service platforms, and dynamic dashboards. I know how to turn ideas into reliable, user-ready applications.
              </p>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white">My Approach</h3>
              <p>
                I take deadlines seriously, communicate clearly, and always aim for quality. You won't just get a developer—you'll get a dependable team player. I believe in continuous learning and evolving with tech trends.
              </p>
              <p>
                Hiring me means bringing in someone who's always curious, always improving, and genuinely passionate about what they do.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
