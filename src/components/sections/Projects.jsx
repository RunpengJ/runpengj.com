import Section from '../ui/Section';
import ProjectCard from '../ui/ProjectCard';
import { projects } from '../../data/projects';

/**
 * Projects section component - Responsive project cards grid
 */
const Projects = () => {
  return (
    <Section 
      id="projects" 
      title="Projects"
      background="gray"
    >
      <div className="grid gap-4 sm:gap-6 lg:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 text-left">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            tags={project.tags}
            className="h-full"
            gradientIndex={index}
            githubUrl={project.githubUrl}
            liveUrl={project.liveUrl}
            cover={project.cover}
          />
        ))}
      </div>
    </Section>
  );
};

export default Projects;