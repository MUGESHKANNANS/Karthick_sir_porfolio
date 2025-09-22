import React, { useEffect } from 'react';
import { Code, Database, Globe, Settings, Cpu, Library } from 'lucide-react';

const Skills: React.FC = () => {
  useEffect(() => {
    console.log('🔧 Technical Expertise component loaded');
    console.log('📊 Skills categories initialized:', skillCategories.length);
  }, []);

  const handleSkillClick = (skill: string, category: string) => {
    console.log(`🎯 Skill clicked: ${skill} in category: ${category}`);
    console.log(`📈 Skill interaction logged at: ${new Date().toISOString()}`);
  };

  const handleCategoryHover = (category: string) => {
    console.log(`🖱️ Hovering over category: ${category}`);
  };
  const skillCategories = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Programming & Scripting",
      skills: ["Python", "JavaScript", "SQL"]
    },
    {
      icon: <Library className="w-6 h-6" />,
      title: "Frameworks & Libraries",
      skills: ["OpenCV", "YOLO", "TensorFlow", "Flask", "Flutter"]
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Web Technologies",
      skills: ["HTML", "CSS"]
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Databases",
      skills: ["MongoDB", "SQL"]
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Tools & Platforms",
      skills: ["Docker", "Git"]
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Hardware & Embedded Systems",
      skills: ["Arduino", "Raspberry Pi"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800 transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Technical <span className="text-primary dark:text-accent">Expertise</span>
            </h2>
            <div className="w-24 h-1 bg-primary dark:bg-accent mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A comprehensive skillset spanning AI/ML, web development, and embedded systems
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-200 dark:border-gray-700"
                onMouseEnter={() => handleCategoryHover(category.title)}
                onClick={() => {
                  console.log(`📋 Category clicked: ${category.title}`);
                  console.log(`🔢 Skills in this category: ${category.skills.length}`);
                }}
              >
                <div className="text-primary dark:text-accent mb-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium hover:bg-primary hover:text-white dark:hover:bg-accent dark:hover:text-gray-900 transition-all duration-300 cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSkillClick(skill, category.title);
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Research Specializations
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  "Artificial Intelligence",
                  "Machine Learning",
                  "Deep Learning",
                  "Image Processing",
                  "Video Processing",
                  "Computer Vision"
                ].map((specialization, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
                    onClick={() => {
                      console.log(`🔬 Research specialization clicked: ${specialization}`);
                      console.log(`📊 Specialization index: ${index}`);
                      console.log(`⏰ Clicked at: ${new Date().toISOString()}`);
                    }}
                    onMouseEnter={() => {
                      console.log(`🖱️ Hovering over research specialization: ${specialization}`);
                    }}
                  >
                    {specialization}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;