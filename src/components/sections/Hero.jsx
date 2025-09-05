import { siteConfig } from '../../data/config';

/**
 * Hero section component - Responsive landing area with name, title, and CTA
 */
const Hero = () => {
  return (
    <section 
      id="hero" 
      className="flex flex-col items-center justify-center min-h-screen text-center px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
          {siteConfig.hero.greeting}
        </h1>
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-slate-600 mb-6 sm:mb-8">
          {siteConfig.hero.title}
        </h2>
        <a
          href={siteConfig.hero.resumeLink}
          className="inline-block bg-teal-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl shadow-md hover:bg-teal-700 hover:shadow-lg transition-all duration-300 text-sm sm:text-base font-medium"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Hero;