
import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
    } else if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const socials = [
    { 
      name: 'YouTube', 
      customIcon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
      url: 'https://www.youtube.com/@healthbook.official',
      hoverColor: 'hover:bg-[#FF0000]'
    },
    { 
      name: 'LinkedIn', 
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 2a2 2 0 110 4 2 2 0 010-4z" />, 
      url: 'https://www.linkedin.com/company/healthbookpodcast/',
      hoverColor: 'hover:bg-[#0077B5]'
    },
    { 
      name: 'Instagram', 
      customIcon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      ),
      url: 'https://www.instagram.com/healthbook.official/',
      hoverColor: 'hover:bg-[#E4405F]'
    },
    { 
      name: 'Facebook', 
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />, 
      url: 'https://www.facebook.com/people/Health-Book/61574226565826/',
      hoverColor: 'hover:bg-[#1877F2]'
    },
  ];

  return (
    <motion.footer 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white pt-24 pb-20 relative overflow-hidden"
    >
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-teal-50 rounded-full blur-[100px] -z-10 opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Brand Section */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-8 cursor-pointer" onClick={() => scrollToSection('top')}>
              <div className="flex flex-col items-center">
                 <div className="flex gap-0.5">
                   <div className="w-2.5 h-6 bg-slate-900 rounded-sm"></div>
                   <div className="w-4 h-6 bg-slate-900 rounded-sm"></div>
                   <div className="w-2.5 h-6 bg-slate-900 rounded-sm"></div>
                 </div>
                 <span className="text-[10px] font-black uppercase tracking-tighter mt-1">health<span className="text-teal-primary">book</span></span>
              </div>
            </div>
            <p className="text-[16px] text-slate-500 font-medium leading-relaxed mb-8">
              Healthbook is dedicated to exploring all aspects of health and wellness. Join us as we speak with experts, share insights, and help you live your healthiest life.
            </p>
            <div>
              <p className="font-bold text-teal-primary mb-4">Follow Us</p>
              <div className="flex gap-4">
                {socials.map((social, i) => (
                  <a 
                    key={i} 
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`w-11 h-11 bg-[#f0f9f9] rounded-full flex items-center justify-center text-teal-primary ${social.hoverColor} hover:text-white hover:shadow-lg transition-all duration-300 transform hover:scale-110`}
                  >
                    {social.customIcon ? social.customIcon : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        {social.icon}
                      </svg>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-slate-900 text-lg mb-8">Quick Links</h4>
            <ul className="space-y-4 text-slate-500 font-medium">
              <li><button onClick={() => scrollToSection('top')} className="hover:text-teal-primary transition-colors text-left">Home</button></li>
              <li><button onClick={() => scrollToSection('benefits')} className="hover:text-teal-primary transition-colors text-left">Benefits</button></li>
              <li><button onClick={() => scrollToSection('featured')} className="hover:text-teal-primary transition-colors text-left">Featured Episode</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="hover:text-teal-primary transition-colors text-left">Contact</button></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="space-y-6">
            <h4 className="font-bold text-slate-900 text-lg mb-8">Contact Us</h4>
            
            {/* Email */}
            <a href="mailto:healthbookdigital@gmail.com" className="bg-[#f8ffff] p-6 rounded-2xl flex items-center gap-4 hover:border-teal-200 border border-transparent transition-all group">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-teal-primary shadow-sm group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0l-9.75 6.75-9.75-6.75" /></svg>
              </div>
              <div>
                <p className="text-xs font-bold text-teal-primary uppercase tracking-widest mb-1">Email</p>
                <p className="text-sm font-bold text-slate-700">healthbookdigital@gmail.com</p>
              </div>
            </a>

            {/* Phone */}
            <a href="tel:+917304806615" className="bg-[#f8ffff] p-6 rounded-2xl flex items-center gap-4 hover:border-teal-200 border border-transparent transition-all group">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-teal-primary shadow-sm group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
              </div>
              <div>
                <p className="text-xs font-bold text-teal-primary uppercase tracking-widest mb-1">Phone</p>
                <p className="text-sm font-bold text-slate-700">+91 73048 06615</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
