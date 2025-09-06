import { Github, Linkedin, Mail } from 'lucide-react';
import { siteConfig } from '../../data/config';

/**
 * Contact section component - Responsive contact information and social links
 */
const Contact = () => {
  return (
    <section id="contact" className="bg-white dark:bg-gray-800 py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 text-center transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4 sm:mb-6 transition-colors duration-300">
        {siteConfig.contact.title}
      </h2>
      <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto transition-colors duration-300">
        {siteConfig.contact.description}
      </p>
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

export default Contact;