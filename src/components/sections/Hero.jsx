import { siteConfig } from '../../data/config';

/**
 * Hero section component - Responsive landing area with profile picture, name, title, and CTA
 */
const Hero = () => {
  return (
    <section 
      id="hero" 
      className="flex flex-col items-center justify-center min-h-screen text-center px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-4xl mx-auto">
        {/* Profile Picture Placeholder */}
        <div className="mb-6 sm:mb-8">
          <div className="w-[150px] h-[150px] sm:w-[175px] sm:h-[175px] md:w-[200px] md:h-[200px] mx-auto rounded-full bg-gradient-to-br from-gray-100 to-gray-200 shadow-lg flex items-center justify-center">
            <span className="text-gray-900 text-4xl sm:text-5xl md:text-6xl font-bold">
              {siteConfig.name.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
        </div>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-gray-900">
          {siteConfig.hero.greeting}
        </h1>
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-gray-600 mb-6 sm:mb-8">
          {siteConfig.hero.title}
        </h2>
        <a
          href={siteConfig.hero.resumeLink}
          className="inline-block bg-gray-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl shadow-md hover:bg-gray-700 hover:shadow-lg transition-all duration-300 text-sm sm:text-base font-medium"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Hero;