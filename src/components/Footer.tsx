import React from 'react';
import { Github, Linkedin, Twitter, Instagram, ArrowUp, Bold, } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent mb-4">
                Alex Cruz
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Bringing creative visions to life through exceptional 3D design, 
                animation, and visual storytelling.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
              <ul className="space-y-2">
                {['3D Animation', 'Character Design', 'Lighting Design', 'Look Development', 'Visual Effects', 'Short Films'].map((service) => (
                  <li key={service}>
                    <span className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
              <div className="flex space-x-4 mb-6">
                {[
                  { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/alexander-cruz-93188311b/' },
                  { icon: <Instagram size={20} />, href: 'https://www.instagram.com/alextremolife/' },
                  { icon: <Bold size={20} />, href: 'https://www.behance.net/alexandercruz15' }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="bg-navy-600 hover:bg-gradient-to-r hover:from-orange-400 hover:to-orange-500 text-gray-400 hover:text-white p-3 rounded-lg transition-all duration-300 transform hover:scale-110"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
              <button
                onClick={scrollToTop}
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200"
              >
                <ArrowUp size={16} />
                Back to top
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Alex Cruz. All rights reserved.
            </p>
            {/*}<div className="flex space-x-6 mt-4 md:mt-0">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                >
                  {link}
                </a>
              ))}
            </div>*/}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;