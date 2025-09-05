import { siteConfig } from '../../data/config';

/**
 * Contact section component - Contact information and social links
 */
const Contact = () => {
  return (
    <section id="contact" className="max-w-4xl mx-auto py-24 px-6 text-center">
      <h2 className="text-3xl font-bold text-teal-600 mb-6">
        {siteConfig.contact.title}
      </h2>
      <p className="text-slate-700 mb-6">
        {siteConfig.contact.description}
      </p>
      <div className="flex justify-center gap-6 text-teal-600">
        <a 
          href={siteConfig.socialLinks.github} 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-teal-700 transition"
        >
          GitHub
        </a>
        <a 
          href={siteConfig.socialLinks.linkedin} 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-teal-700 transition"
        >
          LinkedIn
        </a>
        <a 
          href={`mailto:${siteConfig.socialLinks.email}`}
          className="hover:text-teal-700 transition"
        >
          Email
        </a>
      </div>
    </section>
  );
};

export default Contact;