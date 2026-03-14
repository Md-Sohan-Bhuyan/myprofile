import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, Loader2 } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState(null);
  
  const contactInfo = [
    { icon: Phone, title: "Phone", detail: "+8801779246073" },
    { icon: Mail, title: "Email", detail: "sohanbhuyan7@gmail.com" },
    { icon: MapPin, title: "Address", detail: "Tangail Sadar, Tangail, Dhaka, Bangladesh" },
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-serif font-bold">Let's Work <span className="text-white/50">Together</span></h2>
              <div className="w-24 h-1 bg-white/20 rounded-full"></div>
              <p className="text-lg text-white/60 pt-4 leading-relaxed max-w-md">
                I am eager to contribute my skills, dedication, and problem-solving mindset to a professional team. Let's collaborate to build impactful solutions.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, idx) => (
                <div key={idx} className="flex items-center gap-6 glass p-4 rounded-2xl border border-white/5">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <info.icon className="w-5 h-5 text-white/80" />
                  </div>
                  <div>
                    <p className="text-sm text-white/50 font-medium">{info.title}</p>
                    <p className="text-lg text-white font-medium">{info.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-3xl p-8 md:p-12 border border-white/10"
          >
            <h3 className="text-2xl font-bold mb-8">Send Me a Message</h3>
            
            <form action="https://formspree.io/f/xqeyqogk" method="POST" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <input type="text" name="name" placeholder="Full Name" required className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-white/40 focus:bg-white/10 transition-colors" />
                </div>
                <div className="space-y-2">
                  <input type="email" name="email" placeholder="Email Address" required className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-white/40 focus:bg-white/10 transition-colors" />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <input type="tel" name="phone" placeholder="Phone Number" pattern="[0-9]{11}" required className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-white/40 focus:bg-white/10 transition-colors" />
                </div>
                <div className="space-y-2">
                  <input type="text" name="subject" placeholder="Subject" required className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-white/40 focus:bg-white/10 transition-colors" />
                </div>
              </div>
              
              <div className="space-y-2">
                <textarea name="message" placeholder="Your Message" required rows="5" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-white/40 focus:bg-white/10 transition-colors resize-none"></textarea>
              </div>
              
              <button type="submit" className="w-full bg-white text-background font-bold rounded-xl px-6 py-4 flex items-center justify-center gap-2 hover:bg-white/90 transition-colors">
                <Send className="w-5 h-5" /> Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
