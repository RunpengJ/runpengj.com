import { siteConfig } from '../../data/config';

/**
 * Contact section component - Responsive contact information and social links
 */
const Contact = () => {
  return (
    <section id="contact" className="max-w-4xl mx-auto py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-600 mb-4 sm:mb-6">
        {siteConfig.contact.title}
      </h2>
      <p className="text-base sm:text-lg text-slate-700 mb-6 sm:mb-8 max-w-2xl mx-auto">
        {siteConfig.contact.description}
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 text-teal-600">
        <a 
          href={siteConfig.socialLinks.github} 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-teal-700 transition-colors duration-200 py-2 sm:py-0 text-lg sm:text-base font-medium"
        >
          GitHub
        </a>
        <a 
          href={siteConfig.socialLinks.linkedin} 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-teal-700 transition-colors duration-200 py-2 sm:py-0 text-lg sm:text-base font-medium"
        >
          LinkedIn
        </a>
        <a 
          href={`mailto:${siteConfig.socialLinks.email}`}
          className="hover:text-teal-700 transition-colors duration-200 py-2 sm:py-0 text-lg sm:text-base font-medium"
        >
          Email
        </a>
      </div>
    </section>
  );
};

export default Contact;