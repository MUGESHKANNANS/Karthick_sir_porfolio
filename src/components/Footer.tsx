import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const quickLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Education', id: 'education' },
    { name: 'Experience', id: 'experience' },
    { name: 'Contact', id: 'contact' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-accent mb-4">
                Dr. KARTHICK PANNEERSELVAM
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Thank you for visiting my personal portfolio website. 
                Connect with me over socials. Keep Rising 🚀
              </p>
              <p className="text-gray-400 text-sm">
                Connect with me over live chat for instant responses and discussions 
                about AI, ML, and innovative technology solutions.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-gray-400 hover:text-accent transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>
                  📞{' '}
                  <a
                    href="tel:+919688590579"
                    className="hover:text-accent transition-colors duration-200"
                    aria-label="Call +91 96885 90579"
                  >
                    +91 96885 90579
                  </a>
                </p>
                <p>
                  ✉️{' '}
                  <a
                    href="mailto:karthickpri.in@gmail.com"
                    className="hover:text-accent transition-colors duration-200 break-all"
                    aria-label="Send email to karthickpri.in@gmail.com"
                  >
                    karthickpri.in@gmail.com
                  </a>
                </p>
                <p>📍 Coimbatore, Tamil Nadu</p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                Designed with <Heart className="w-4 h-4 inline text-red-500 mx-1" /> by{' '}
                <span className="text-accent font-semibold">Dr. KARTHICK PANNEERSELVAM</span>
              </p>
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute bottom-6 right-6 w-12 h-12 bg-primary hover:bg-secondary text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </footer>
  );
};

export default Footer;