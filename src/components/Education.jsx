import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold">My <span className="text-white/50">Education</span></h2>
          <div className="w-24 h-1 bg-white/20 mx-auto rounded-full"></div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="glass p-8 md:p-10 rounded-3xl relative overflow-hidden group hover:bg-white/10 transition-colors duration-500">
            {/* Decorative blob */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-colors duration-500"></div>
            
            <div className="flex flex-col md:flex-row gap-8 items-start md:items-center relative z-10">
              {/* University Logo */}
              <div className="w-24 h-24 shrink-0 rounded-2xl bg-white flex items-center justify-center p-3 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                <img src="https://ius.edu.bd/public/upload/systemSettings/699753.png" alt="University of Scholars Logo" className="w-full h-full object-contain" />
              </div>
              
              <div className="space-y-4 flex-1">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">University of Scholars</h3>
                  <p className="text-lg text-white/70 font-serif italic">B.Sc in Computer Science & Engineering</p>
                </div>
                
                <div className="flex flex-wrap gap-4 text-sm text-white/50 font-medium pt-2">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-white/80" />
                    <span>Session: 2023 - Present</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>Dhaka, Bangladesh</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-white/10 text-white/60 leading-relaxed">
              <p>Completed formal education with a strong focus on computer science and programming fundamentals. Actively applied theoretical knowledge through projects and online courses to enhance practical skills.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
