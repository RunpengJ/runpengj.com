import PropTypes from 'prop-types';

/**
 * Reusable Card component for displaying projects and research items
 */
const Card = ({ title, description, badge, children, className = "" }) => {
  return (
    <div className={`border border-teal-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition relative ${className}`}>
      {badge && (
        <span className="absolute top-3 right-3 text-xs bg-teal-100 text-teal-700 px-2 py-1 rounded-md">
          {badge}
        </span>
      )}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-slate-600">{description}</p>
      {children}
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  badge: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string
};

export default Card;