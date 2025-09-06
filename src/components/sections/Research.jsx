import Section from '../ui/Section';
import ResearchCard from '../ui/ResearchCard';
import { research } from '../../data/research';

/**
 * Research section component - Responsive research items grid
 */
const Research = () => {
  return (
    <Section 
      id="research" 
      title="Research"
    >
      <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-8 sm:mb-10 max-w-3xl mx-auto transition-colors duration-300">
        My research explores machine learning, deep learning, computer vision, and data privacy.
      </p>
      <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8 text-left">
        {research.map((item) => (
          <ResearchCard
            key={item.id}
            title={item.title}
            description={item.description}
            authors={item.authors}
            venue={item.venue}
            year={item.year}
            status={item.status}
            links={item.links}
            className="h-full"
          />
        ))}
      </div>
    </Section>
  );
};

export default Research;