import PropTypes from 'prop-types';

/**
 * Reusable Section wrapper component with consistent styling
 */
const Section = ({ 
  id, 
  title, 
  children, 
  className = "", 
  background = "white",
  maxWidth = "max-w-5xl"
}) => {
  const bgClass = background === "gray" ? "bg-slate-50" : "bg-white";
  
  return (
    <section id={id} className={`${bgClass} py-24 px-6 ${className}`}>
      <div className={`${maxWidth} mx-auto`}>
        {title && (
          <h2 className="text-3xl font-bold text-teal-600 mb-10">{title}</h2>
        )}
        {children}
      </div>
    </section>
  );
};

Section.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  background: PropTypes.oneOf(['white', 'gray']),
  maxWidth: PropTypes.string
};

export default Section;