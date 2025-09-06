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
        <a
          href={siteConfig.hero.resumeLink}
          className="inline-block bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl shadow-md hover:bg-gray-700 dark:hover:bg-gray-200 hover:shadow-lg dark:hover:shadow-lg dark:hover:shadow-black/20 transition-all duration-300 text-sm sm:text-base font-medium"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Hero;