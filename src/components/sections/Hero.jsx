import { Github, Linkedin, Mail, X } from 'lucide-react';
import { siteConfig } from '../../data/config';

/**
 * Hero section component - Responsive landing area with profile picture, name, title, and CTA
 */
const Hero = () => {
  return (
    <section 
      id="hero" 
      className="flex flex-col items-center justify-center min-h-screen text-center px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto">
        <div className="mb-6 sm:mb-8">
          <div className="w-[150px] h-[150px] sm:w-[175px] sm:h-[175px] md:w-[200px] md:h-[200px] mx-auto rounded-full shadow-lg dark:shadow-lg dark:shadow-black/20 border border-gray-200 dark:border-gray-600 overflow-hidden transition-colors duration-300">
            <img 
              src={siteConfig.hero.profile} 
              alt={`${siteConfig.name} profile picture`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-gray-100 transition-colors duration-300">
          {siteConfig.hero.greeting}
        </h1>
        <h2 className="text-lg md:text-xl font-medium text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 transition-colors duration-300">
          {siteConfig.hero.title}
        </h2>
        <div className="flex justify-center gap-4">
          <a 
            href={siteConfig.socialLinks.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-100 transition-all duration-300"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a 
            href={siteConfig.socialLinks.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-100 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a 
            href={siteConfig.socialLinks.twitter} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-100 transition-all duration-300"
            aria-label="X (Twitter)"
          >
            <X className="w-6 h-6" />
          </a>
          <a 
            href={`mailto:${siteConfig.socialLinks.email}`}
            className="p-3 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-100 transition-all duration-300"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;