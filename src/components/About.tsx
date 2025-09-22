import React from 'react';
import { Award, BookOpen, Users, Lightbulb } from 'lucide-react';
import aboutImg from '../assets/about01.JPG?url';

const About: React.FC = () => {
  const aboutImageUrl = aboutImg;
  const highlights = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "UGC NET Qualified",
      description: "Cleared UGC NET (June 2019) with 95.8%"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Ph.D. in AI & ML",
      description: "Doctorate from Alagappa University, Karaikudi"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Industry Experience",
      description: "6 years in IT industry with Wipro Technologies"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Research Excellence",
      description: "Best Paper Award at IEEE Conference"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About <span className="text-primary dark:text-accent">Dr. Karthick</span>
            </h2>
            <div className="w-24 h-1 bg-primary dark:bg-accent mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-stretch mb-16">
            {/* Left: Content */}
            <div className="space-y-6">
              <div className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed space-y-4">
                <p>
                  Dr. Karthick Panneerselvam is a passionate academic and researcher specializing in 
                  Computer Science and Engineering, with a strong focus on <strong className="text-primary dark:text-accent">
                  Artificial Intelligence and Machine Learning (AI & ML)</strong>.
                </p>
                <p>
                  He holds a B.Tech and M.Tech in Computer Science and Engineering, has cleared the 
                  UGC NET (June 2019) with 95.8%, and earned his Ph.D. from Alagappa University, Karaikudi.
                </p>
                <p>
                  Before entering academia, Dr. Panneerselvam spent 6 years in the IT industry, 
                  notably with Wipro Technologies, where he gained expertise in database management, 
                  network backup, and application development.
                </p>
                <p>
                  With expertise spanning <strong className="text-primary dark:text-accent">
                  Image and Video Processing, Machine Learning, and Deep Learning</strong>, he is an 
                  inspiring educator and researcher committed to shaping the next generation of 
                  innovators and tech enthusiasts.
                </p>
              </div>

              {/* Highlights grid placed below content (left side) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {highlights.map((item, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                  >
                    <div className="text-primary dark:text-accent mb-3">
                      {item.icon}
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Image */}
            <div className="flex justify-center md:justify-end">
              <div className="relative">
                <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-primary/20 dark:border-accent/30">
                  {aboutImageUrl ? (
                    <img
                      src={aboutImageUrl}
                      alt="About image"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const nextEl = e.currentTarget.nextElementSibling as HTMLElement | null;
                        if (nextEl) nextEl.style.display = 'flex';
                      }}
                    />
                  ) : null}
                  <div className="hidden w-full h-full bg-gradient-to-r from-primary to-secondary items-center justify-center text-white text-xl font-bold">
                    About
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center bg-gradient-to-r from-primary to-secondary dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 text-white">
            <p className="text-xl md:text-2xl font-medium mb-4">
              "His research and academic contributions have been recognized with honors, 
              including the Best Paper Award at an IEEE Conference."
            </p>
            <div className="w-16 h-1 bg-white/50 mx-auto"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;