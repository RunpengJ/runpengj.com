import { useState } from 'react';
import Section from '../ui/Section';
import { skillsData } from '../../data/skills';
import { Layers, Brain, Globe, Cloud, Code } from 'lucide-react';

/**
 * Interactive Skills section with categorized tabs and filtering
 */
const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    { key: 'All', label: 'All', icon: Layers },
    { key: 'AI/ML', label: 'AI/ML', icon: Brain },
    { key: 'Backend', label: 'Backend', icon: Globe },
    { key: 'Cloud & DevOps', label: 'Cloud & DevOps', icon: Cloud },
    { key: 'Frontend', label: 'Frontend', icon: Code }
  ];

  // Get all skills for "All" view
  const getAllSkills = () => {
    const allSkills = [];
    Object.keys(skillsData).forEach(category => {
      Object.keys(skillsData[category]).forEach(subcategory => {
        allSkills.push({
          groupName: `${category} - ${subcategory}`,
          skills: skillsData[category][subcategory]
        });
      });
    });
    return allSkills;
  };

  // Get skills for specific category
  const getCategorySkills = (category) => {
    if (category === 'All') return getAllSkills();
    
    const categoryData = skillsData[category];
    return Object.keys(categoryData).map(subcategory => ({
      groupName: subcategory,
      skills: categoryData[subcategory]
    }));
  };

  // Count total skills
  const getTotalSkills = () => {
    let total = 0;
    Object.values(skillsData).forEach(category => {
      Object.values(category).forEach(skills => {
        total += skills.length;
      });
    });
    return total;
  };

  // Get current skills to display
  const currentSkills = getCategorySkills(activeCategory);
  const isAllView = activeCategory === 'All';

  // Get stats text
  const getStatsText = () => {
    if (activeCategory === 'All') {
      return `${getTotalSkills()} skills across 4 core areas`;
    } else {
      const categorySkills = getCategorySkills(activeCategory);
      const count = categorySkills.reduce((total, group) => total + group.skills.length, 0);
      return `Specialized in ${count} ${activeCategory.toLowerCase()} technologies`;
    }
  };

  return (
    <Section 
      id="skills" 
      title="Technical Skills"
      background="gray"
    >
      <p className="text-center text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto transition-colors duration-300">
        Full-stack engineer with expertise in AI/ML systems and scalable applications
      </p>

      {/* Category Pills */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
          <button
            key={category.key}
            onClick={() => setActiveCategory(category.key)}
            className={`
              flex items-center px-6 py-3 rounded-full border transition-all duration-300 cursor-pointer
              ${activeCategory === category.key
                ? 'bg-gray-100 dark:bg-gray-100 text-gray-900 dark:text-gray-900 border-gray-900 dark:border-gray-100 shadow-md'
                : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
              }
            `}
          >
            <Icon className="w-4 h-4 mr-2" />
            {category.label}
          </button>
          );
        })}
      </div>

      {/* Skills Container */}
      <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 border border-gray-200 dark:border-gray-600 shadow-sm dark:shadow-lg dark:shadow-black/10 transition-colors duration-300">
        <div className={`grid md:grid-cols-2 lg:grid-cols-3 ${isAllView ? 'gap-4' : 'gap-6'}`}>
          {currentSkills.map((group, index) => (
            <div 
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-5 border border-gray-100 dark:border-gray-600 transition-colors duration-300"
            >
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 text-sm uppercase tracking-wider mb-4 transition-colors duration-300">
                {group.groupName}
              </h4>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`
                      px-3 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600 rounded-full
                      transition-all duration-300 cursor-pointer
                      hover:bg-gray-900 dark:hover:bg-gray-100 hover:text-white dark:hover:text-gray-900 hover:border-gray-900 dark:hover:border-gray-100
                      ${isAllView ? 'text-xs' : 'text-sm'}
                    `}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Stats */}
        <div className="text-gray-500 dark:text-gray-400 text-sm text-center mt-6 transition-colors duration-300">
          {getStatsText()}
        </div>
      </div>
    </Section>
  );
};

export default SkillsSection;