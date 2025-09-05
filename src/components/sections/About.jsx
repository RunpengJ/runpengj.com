import Section from '../ui/Section';
import { siteConfig } from '../../data/config';
import { User } from 'lucide-react';

/**
 * About section component with two-column layout and profile image placeholder
 */
const About = () => {
  return (
    <Section 
      id="about" 
      title={siteConfig.about.title}
      maxWidth="max-w-5xl"
    >
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 lg:gap-12">
        {/* Profile Image Placeholder */}
        <div className="flex-shrink-0">
          <div className="w-48 h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 bg-gray-200 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-2xl flex items-center justify-center transition-colors duration-300">
            <div className="text-center text-gray-500 dark:text-gray-400 transition-colors duration-300">
              <User className="w-12 h-12 mx-auto mb-2 opacity-50" />
              <span className="text-sm font-medium">Profile Image</span>
            </div>
          </div>
        </div>
        
        {/* About Text Content */}
        <div className="flex-1 max-w-2xl">
          <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-gray-600 dark:text-gray-400 text-left transition-colors duration-300">
            {siteConfig.about.description}
          </p>
        </div>
      </div>
    </Section>
  );
};

export default About;