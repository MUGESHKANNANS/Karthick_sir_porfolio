import React from 'react';
import { Linkedin, Github, Instagram } from 'lucide-react';
import ParticlesBackground from './ParticlesBackground';
import profileImg from '../assets/profile.jpg';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-100 via-amber-200 to-yellow-300 dark:from-gray-900 dark:via-purple-900 dark:to-gray-800 transition-all duration-300 relative pt-20">
      <div className="absolute inset-0 z-0">
        <ParticlesBackground />
      </div>
      <div className="container mx-auto px-6 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-7xl mx-auto animate-fade-in">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-left lg:text-left">
              <div className="mb-8">
                <p className="text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-4">
                  I'm
                </p>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                  Dr KARTHICK<br />
                  <span className="text-amber-700 dark:text-yellow-300">PANNEERSELVAM</span>
                </h1>
                <TypingPhrases />
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <button
                    onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                    className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
                  >
                    About Me
                  </button>
                </div>

                <div className="flex space-x-4">
                  <a
                    href="https://facebook.com/karthick-panneerselvam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-black/80 text-white rounded-full flex items-center justify-center hover:bg-black transition-all duration-300 transform hover:scale-110"
                    aria-label="Facebook"
                  >
                    <span className="text-lg font-bold">f</span>
                  </a>
                  <a
                    href="https://linkedin.com/in/karthick-panneerselvam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-black/80 text-white rounded-full flex items-center justify-center hover:bg-black transition-all duration-300 transform hover:scale-110"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="https://github.com/karthick-panneerselvam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-black/80 text-white rounded-full flex items-center justify-center hover:bg-black transition-all duration-300 transform hover:scale-110"
                    aria-label="GitHub"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://instagram.com/karthick-panneerselvam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-black/80 text-white rounded-full flex items-center justify-center hover:bg-black transition-all duration-300 transform hover:scale-110"
                    aria-label="Instagram"
                  >
                    <Instagram size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Content - Profile Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full border-4 border-pink-300 overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500">
                  <img
                    src={profileImg}
                    alt="Dr. Karthick Panneerselvam"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const nextEl = e.currentTarget.nextElementSibling as HTMLElement | null;
                      if (nextEl) {
                        nextEl.style.display = 'flex';
                      }
                    }}
                  />
                  <div className="hidden w-full h-full bg-gradient-to-r from-primary to-secondary items-center justify-center text-white text-xl font-bold">
                    KP
                  </div>
                </div>
                <div className="absolute -inset-4  animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Quick Info Section */}
          <div className="mt-10 text-center">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 max-w-4xl mx-auto">
              <p className="text-amber-900 dark:text-white text-lg mb-2">
                <strong>Associate Professor</strong> at KPR Institute of Engineering and Technology, Coimbatore
              </p>
              <p className="text-amber-800 dark:text-white/90">
                Specializing in AI & ML, Computer Vision, Deep Learning & Image Processing
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-white/70 hover:text-white transition-colors duration-300"
          aria-label="Scroll to about section"
        >
          {/* <ChevronDown size={32} /> */}
        </button>
      </div>
    </section>
  );
};

const TypingPhrases: React.FC = () => {
  const phrases = React.useMemo(() => [
    'Deep Learning',
    'Machine Learning',
    'Computer Vision',
  ], []);

  const [typedText, setTypedText] = React.useState('');
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [loopIndex, setLoopIndex] = React.useState(0);

  React.useEffect(() => {
    const current = phrases[loopIndex % phrases.length];
    const delta = isDeleting ? 60 : 120;

    const tick = () => {
      const nextText = isDeleting
        ? current.substring(0, typedText.length - 1)
        : current.substring(0, typedText.length + 1);
      setTypedText(nextText);

      if (!isDeleting && nextText === current) {
        setTimeout(() => setIsDeleting(true), 900);
      } else if (isDeleting && nextText === '') {
        setIsDeleting(false);
        setLoopIndex(prev => prev + 1);
      }
    };

    const timer = setTimeout(tick, delta);
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, loopIndex, phrases]);

  return (
    <p className="text-xl md:text-2xl text-amber-800 dark:text-yellow-300 mb-8 font-medium">
      <span>I am into </span>
      <span className="font-semibold">{typedText}</span>
      <span className="inline-block w-2 h-6 ml-1 align-middle bg-amber-600 dark:bg-yellow-300 animate-pulse" />
    </p>
  );
};

export default Hero;