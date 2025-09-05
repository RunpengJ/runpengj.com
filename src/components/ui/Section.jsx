import PropTypes from 'prop-types';

/**
 * Reusable Section wrapper component with responsive styling and proper centering
 */
const Section = ({ 
  id, 
  title, 
  children, 
  className = "", 
  background = "white",
  maxWidth = "max-w-6xl"
}) => {
  const bgClass = background === "gray" ? "bg-gray-50 dark:bg-gray-900" : "bg-white dark:bg-gray-800";
  
  return (
    <section id={id} className={`${bgClass} py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${className}`}>
      <div className={`${maxWidth} mx-auto text-center`}>
        {title && (
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6 sm:mb-8 md:mb-10 transition-colors duration-300">{title}</h2>
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