import Section from '../ui/Section';
import SkillBadge from '../ui/SkillBadge';
import { skills } from '../../data/skills';

/**
 * Skills section component - Displays skills in a responsive grid
 */
const Skills = () => {
  return (
    <Section 
      id="skills" 
      title="Skills"
      background="gray"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <SkillBadge key={index} skill={skill} />
        ))}
      </div>
    </Section>
  );
};

export default Skills;