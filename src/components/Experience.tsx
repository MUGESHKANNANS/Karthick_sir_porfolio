import React from 'react';
import { Building, Calendar, Briefcase, Users } from 'lucide-react';
import kprLogo from '../assets/Education/kpr.jfif';
import lpuLogo from '../assets/Education/lpu.png';
import vcasLogo from '../assets/Education/vcas.jfif';
import wiproLogo from '../assets/Education/wipro.svg';
import cmsLogo from '../assets/Education/cms.jfif';

const Experience: React.FC = () => {
  const academicExperience = [
    {
      company: "KPR Institute of Engineering & Technology (KPR IET)",
      role: "Associate Professor",
      duration: "Present",
      type: "current",
      logo: kprLogo
    },
    {
      company: "Lovely Professional University (LPU)",
      role: "Assistant Professor",
      duration: "2022 – 2025",
      type: "academic",
      logo: lpuLogo
    },
    {
      company: "VCAS",
      role: "Head of Department",
      duration: "2018 – 2022",
      type: "academic",
      logo: vcasLogo
    }
  ];

  const industrialExperience = [
    {
      company: "Wipro InfoTech",
      role: "Project Engineer @ RBS BANK",
      duration: "2016 – 2018",
      type: "industry",
      logo: wiproLogo
    },
    {
      company: "Wipro InfoTech",
      role: "Team Leader @ RBS BANK",
      duration: "2014 – 2016",
      type: "leadership",
      logo: wiproLogo
    },
    {
      company: "CMS Info System",
      role: "Server Engineer",
      duration: "2012 – 2014",
      type: "technical",
      logo: cmsLogo
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'current':
        return <Building className="w-6 h-6" />;
      case 'leadership':
        return <Users className="w-6 h-6" />;
      case 'technical':
        return <Briefcase className="w-6 h-6" />;
      default:
        return <Building className="w-6 h-6" />;
    }
  };

  const getColor = (type: string) => {
    switch (type) {
      case 'current':
        return 'from-green-500 to-green-600';
      case 'leadership':
        return 'from-purple-500 to-purple-600';
      case 'technical':
        return 'from-blue-500 to-blue-600';
      case 'academic':
        return 'from-indigo-500 to-indigo-600';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  const ExperienceCard = ({ item, index }: { item: any; index: number }) => (
    <div
      key={index}
      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-200 dark:border-gray-700"
    >
      <div className="flex items-start gap-4">
        <div className={`flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-r ${getColor(item.type)} flex items-center justify-center text-white shadow-lg`}>
          {getIcon(item.type)}
        </div>
        
        <div className="flex-grow">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
            {item.company}
          </h3>
          <p className="text-primary dark:text-accent font-semibold mb-2">
            {item.role}
          </p>
          <div className="flex items-center text-gray-500 dark:text-gray-400">
            <Calendar className="w-4 h-4 mr-2" />
            <span className="text-sm">{item.duration}</span>
          </div>
        </div>

        <div className="flex-shrink-0">
          <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center overflow-hidden shadow-lg border-2 border-gray-200 dark:border-gray-600">
            <img 
              src={item.logo} 
              alt={`${item.company} logo`}
              className="w-full h-full object-contain p-1"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const nextEl = e.currentTarget.nextElementSibling as HTMLElement | null;
                if (nextEl) {
                  nextEl.style.display = 'flex';
                }
              }}
            />
            <div className="w-full h-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white text-sm font-bold" style={{display: 'none'}}>
              {item.company.split(' ')[0].charAt(0)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800 transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Professional <span className="text-primary dark:text-accent">Experience</span>
            </h2>
            <div className="w-24 h-1 bg-primary dark:bg-accent mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A blend of academic excellence and industry expertise spanning over a decade
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Academic Experience */}
            <div>
              <div className="flex items-center mb-8">
                <Building className="w-6 h-6 text-primary dark:text-accent mr-3" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Academic Experience
                </h3>
              </div>
              <div className="space-y-6">
                {academicExperience.map((item, index) => (
                  <ExperienceCard key={index} item={item} index={index} />
                ))}
              </div>
            </div>

            {/* Industrial Experience */}
            <div>
              <div className="flex items-center mb-8">
                <Briefcase className="w-6 h-6 text-primary dark:text-accent mr-3" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Industrial Experience
                </h3>
              </div>
              <div className="space-y-6">
                {industrialExperience.map((item, index) => (
                  <ExperienceCard key={index} item={item} index={index} />
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-primary to-secondary dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Career Highlights</h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold mb-2">10+</div>
                  <div className="text-sm opacity-90">Years of Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">6</div>
                  <div className="text-sm opacity-90">Years in Industry</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">4+</div>
                  <div className="text-sm opacity-90">Years in Academia</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;