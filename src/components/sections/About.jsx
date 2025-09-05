import Section from '../ui/Section';
import { siteConfig } from '../../data/config';

/**
 * About section component
 */
const About = () => {
  return (
    <Section 
      id="about" 
      title={siteConfig.about.title}
      maxWidth="max-w-4xl"
    >
      <p className="text-lg leading-relaxed text-slate-700">
        {siteConfig.about.description}
      </p>
    </Section>
  );
};

export default About;