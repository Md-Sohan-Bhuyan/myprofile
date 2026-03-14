import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 sm:pt-24 pb-12 relative overflow-hidden">

      {/* Animated Background elements */}
      <div className="absolute top-1/4 left-1/4 w-[20rem] sm:w-[30rem] h-[20rem] sm:h-[30rem] bg-indigo-500/10 rounded-full blur-[120px] -z-10 animate-pulse mix-blend-screen"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[18rem] sm:w-[25rem] h-[18rem] sm:h-[25rem] bg-purple-500/10 rounded-full blur-[120px] -z-10 animate-pulse delay-[2000ms] mix-blend-screen"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0,transparent_50%)] -z-10"></div>

      <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-10 md:gap-12 items-center">

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6 text-center md:text-left"
        >
          <div className="space-y-2">
            <h2 className="text-lg sm:text-xl md:text-2xl text-white/60 font-medium tracking-wide">
              Hello, I'm
            </h2>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold font-serif leading-tight">
              Md Sohan <br /> Bhuyan
            </h1>

            <h3 className="text-xl sm:text-2xl md:text-3xl text-white/80 font-medium mt-4">
              Full Stack Web Developer
            </h3>
          </div>

          <p className="text-base sm:text-lg text-white/60 max-w-lg mx-auto md:mx-0 leading-relaxed">
            Passionate about crafting sleek, high-performance web solutions. I turn ideas into reality with clean code, smart design & business-driven strategies. With 2+ years of experience, I specialize in building scalable applications.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row flex-wrap gap-4 justify-center md:justify-start">

            <a 
              href="#projects"
              className="px-8 py-3 bg-white text-background rounded-full font-semibold hover:bg-white/90 transition-colors text-center"
            >
              View My Work
            </a>

            <a 
              href="https://drive.google.com/uc?export=download&id=1rUFWH9YMnJDHKSsWZT-SdkcrhrbzCNHp"
              className="px-6 py-3 border border-white/20 rounded-full font-semibold hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
            >
              <Download size={20} />
              Resume
            </a>

            <a 
              href="#contact"
              className="px-8 py-3 border border-white/20 rounded-full font-semibold hover:bg-white/10 transition-colors text-center"
            >
              Contact Me
            </a>

          </div>
        </motion.div>


        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center md:justify-end"
        >

          <div className="relative z-10 flex justify-center items-end w-full max-w-[1000px] h-[20rem] sm:h-[26rem] md:h-[32rem]">

            <div className="relative 
            w-[16rem] h-[16rem] 
            sm:w-[22rem] sm:h-[22rem] 
            md:w-[28rem] md:h-[28rem] 
            lg:w-[32rem] lg:h-[32rem] 
            rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 p-1 
            hover:scale-105 transition-transform duration-500">

              <img 
                src="/image/profile-transparent.png" 
                alt="Md Sohan Bhuyan" 
                className="w-full h-full object-cover rounded-full shadow-2xl"
              />

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default Hero;