import React from 'react';
import { Github, Linkedin, Youtube, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-surface border-t border-white/5 py-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-white/5 border border-white/10 flex items-end justify-center">
              <img src="/image/profile-transparent.png" alt="Md Sohan Bhuyan" className="w-[120%] h-[120%] object-cover object-top" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">Md Sohan Bhuyan</h4>
              <p className="text-sm text-white/50">Full Stack Web Developer</p>
            </div>
          </div>

          <div className="flex gap-4">
            <a href="https://github.com/Md-Sohan-Bhuyan" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:bg-white hover:text-background transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/sohan-bhuyan-930793315/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:bg-white hover:text-background transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:bg-white hover:text-background transition-colors">
              <Youtube className="w-5 h-5" />
            </a>
            <a href="#" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:bg-white hover:text-background transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
          <p>&copy; {new Date().getFullYear()} Md Sohan Bhuyan. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="mailto:sohanbhuyan7@gmail.com" className="hover:text-white transition-colors">sohanbhuyan7@gmail.com</a>
            <span className="hidden md:block">&bull;</span>
            <a href="tel:+8801779246073" className="hover:text-white transition-colors">+8801779246073</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
