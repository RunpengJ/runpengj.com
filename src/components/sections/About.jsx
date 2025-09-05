import Section from '../ui/Section';
import { siteConfig } from '../../data/config';

/**
 * About section component with responsive text sizing
 */
const About = () => {
  return (
    <Section 
      id="about" 
      title={siteConfig.about.title}
      maxWidth="max-w-4xl"
    >
      <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-slate-700 text-left max-w-3xl mx-auto">
        {siteConfig.about.description}
      </p>
    </Section>
  );
};

export default About;