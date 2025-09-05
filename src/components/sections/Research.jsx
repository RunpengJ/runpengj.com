import Section from '../ui/Section';
import Card from '../ui/Card';
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
      <div className="grid gap-4 sm:gap-6 lg:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 text-left">
        {research.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            description={item.description}
            badge={item.type}
            className="h-full"
          />
        ))}
      </div>
    </Section>
  );
};

export default Research;