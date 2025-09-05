import PropTypes from 'prop-types';

/**
 * Research card component with distinct styling and research badge
 */
const ResearchCard = ({ title, description, type, className = "" }) => {
  return (
    <div className={`bg-white border-l-4 border-l-indigo-600 border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 relative ${className}`}>
      <div className="absolute top-4 right-4 bg-indigo-50 text-indigo-700 text-xs px-3 py-1 rounded-full font-semibold">
        {type || 'Research'}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-900 pr-24">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
      <div className="mt-4 border-t border-gray-100 pt-4">
        <span className="text-xs text-gray-500 uppercase tracking-wide">Academic Research</span>
      </div>
    </div>
  );
};

ResearchCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  type: PropTypes.string,
  className: PropTypes.string
};

export default ResearchCard;