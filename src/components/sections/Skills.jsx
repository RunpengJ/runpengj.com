import Section from '../ui/Section';
import SkillBadge from '../ui/SkillBadge';
import { skills } from '../../data/skills';

/**
 * Skills section component - Responsive skills grid with better mobile layout
 */
const Skills = () => {
  return (
    <Section 
      id="skills" 
      title="Skills"
      background="gray"
    >
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 lg:gap-6 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <SkillBadge key={index} skill={skill} />
        ))}
      </div>
    </Section>
  );
};

export default Skills;