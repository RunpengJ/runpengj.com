import PropTypes from 'prop-types';

/**
 * Reusable SkillBadge component for displaying individual skills
 */
const SkillBadge = ({ skill }) => {
  return (
    <div className="p-4 border border-teal-200 rounded-xl text-center">
      {skill}
    </div>
  );
};

SkillBadge.propTypes = {
  skill: PropTypes.string.isRequired
};

export default SkillBadge;