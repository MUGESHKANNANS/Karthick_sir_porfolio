import React from 'react';
import { GraduationCap, Award, Calendar } from 'lucide-react';
import issatLogo from '../assets/Education/issat-logo.png';
import ugcLogo from '../assets/Education/ugc.jpg';
import bharathLogo from '../assets/Education/logo_face_book.png';
import kluLogo from '../assets/Education/klu.png';

const Education: React.FC = () => {

  const educationData = [
    {
      institution: "Alagappa University, Karaikudi",
      degree: "Doctor of Philosophy (Ph.D.) – Computer Science",
      year: "2024",
      specialization: "Artificial Intelligence & Machine Learning",
      type: "doctorate",
      logo: issatLogo
    },
    {
      institution: "NTA UGC NET Exam (Computer Science & Applications)",
      degree: "National Eligibility Test (NET)",
      year: "2019",
      specialization: "Qualified with 95.8%",
      type: "certification",
      logo: ugcLogo
    },
    {
      institution: "Bharath University, Chennai",
      degree: "Master of Technology (M.Tech.) – Computer Science & Engineering",
      year: "2017",
      type: "masters",
      logo: bharathLogo
    },
    {
      institution: "Kalasalingam University, Krishnankoil, Tamil Nadu",
      degree: "Bachelor of Technology (B.Tech.) – Computer Science & Engineering",
      year: "2012",
      type: "bachelors",
      logo: kluLogo
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'certification':
        return <Award className="w-6 h-6" />;
      default:
        return <GraduationCap className="w-6 h-6" />;
    }
  };

  const getColor = (type: string) => {
    switch (type) {
      case 'doctorate':
        return 'from-purple-500 to-purple-600';
      case 'certification':
        return 'from-green-500 to-green-600';
      case 'masters':
        return 'from-blue-500 to-blue-600';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900 transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Educational <span className="text-primary dark:text-accent">Journey</span>
            </h2>
            <div className="w-24 h-1 bg-primary dark:bg-accent mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
              "Education is not the learning of facts, but the training of the mind to think."
            </p>
          </div>

          <div className="space-y-8">
            {educationData.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className={`flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-r ${getColor(item.type)} flex items-center justify-center text-white shadow-lg`}>
                    {getIcon(item.type)}
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {item.institution}
                    </h3>
                    <p className="text-lg font-semibold text-primary dark:text-accent mb-2">
                      {item.degree}
                    </p>
                    {item.specialization && (
                      <p className="text-gray-600 dark:text-gray-400 mb-2">
                        {item.specialization}
                      </p>
                    )}
                    <div className="flex items-center text-gray-500 dark:text-gray-500">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{item.year}</span>
                    </div>
                  </div>

                  <div className="flex-shrink-0">
                    <div className="w-32 h-32 bg-white rounded-lg flex items-center justify-center overflow-hidden shadow-lg border-2 border-gray-200 dark:border-gray-600">
                      <img 
                        src={item.logo} 
                        alt={`${item.institution} logo`}
                        className="w-full h-full object-contain p-2"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          const nextEl = e.currentTarget.nextElementSibling as HTMLElement | null;
                          if (nextEl) {
                            nextEl.style.display = 'flex';
                          }
                        }}
                      />
                      <div className="w-full h-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white text-xl font-bold" style={{display: 'none'}}>
                        {item.institution.split(' ')[0].charAt(0)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-primary to-secondary dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Academic Excellence</h3>
              <p className="text-lg opacity-90">
                A strong foundation in Computer Science and Engineering with specialized expertise 
                in AI & ML, backed by both academic rigor and practical industry experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;