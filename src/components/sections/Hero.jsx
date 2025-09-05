import { siteConfig } from '../../data/config';

/**
 * Hero section component - Landing area with name, title, and CTA
 */
const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen text-center px-6">
      <h1 className="text-5xl font-bold mb-4">{siteConfig.hero.greeting}</h1>
      <h2 className="text-2xl font-medium text-slate-600 mb-6">
        {siteConfig.hero.title}
      </h2>
      <a
        href={siteConfig.hero.resumeLink}
        className="bg-teal-600 text-white px-6 py-3 rounded-2xl shadow-md hover:bg-teal-700 transition"
      >
        Download Resume
      </a>
    </section>
  );
};

export default Hero;