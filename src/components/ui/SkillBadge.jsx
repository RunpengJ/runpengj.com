import PropTypes from 'prop-types';

/**
 * Reusable SkillBadge component for displaying individual skills
 */
const SkillBadge = ({ skill }) => {
  return (
    <div className="p-4 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl text-center text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors duration-300">
      {skill}
    </div>
  );
};

SkillBadge.propTypes = {
  skill: PropTypes.string.isRequired
};

export default SkillBadge;