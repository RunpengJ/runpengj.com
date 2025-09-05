import Section from '../ui/Section';
import Card from '../ui/Card';
import { research } from '../../data/research';

/**
 * Research section component - Displays research items with badges
 */
const Research = () => {
  return (
    <Section 
      id="research" 
      title="Research"
    >
      <div className="grid gap-6 md:grid-cols-2">
        {research.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            description={item.description}
            badge={item.type}
          />
        ))}
      </div>
    </Section>
  );
};

export default Research;