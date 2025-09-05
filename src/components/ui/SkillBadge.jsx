import PropTypes from 'prop-types';

/**
 * Reusable SkillBadge component for displaying individual skills
 */
const SkillBadge = ({ skill }) => {
  return (
    <div className="p-4 bg-white border border-gray-200 rounded-xl text-center text-gray-700 hover:bg-gray-50 transition-colors duration-200">
      {skill}
    </div>
  );
};

SkillBadge.propTypes = {
  skill: PropTypes.string.isRequired
};

export default SkillBadge;