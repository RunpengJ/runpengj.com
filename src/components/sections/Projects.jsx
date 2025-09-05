import Section from '../ui/Section';
import Card from '../ui/Card';
import { projects } from '../../data/projects';

/**
 * Projects section component - Displays project cards in a grid
 */
const Projects = () => {
  return (
    <Section 
      id="projects" 
      title="Projects"
      background="gray"
    >
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <Card
            key={project.id}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </Section>
  );
};

export default Projects;