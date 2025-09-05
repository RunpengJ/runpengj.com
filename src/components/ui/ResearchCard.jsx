import PropTypes from 'prop-types';

/**
 * Research card component with detailed academic layout
 */
const ResearchCard = ({ title, description, authors, venue, year, status, className = "" }) => {
  return (
    <div className={`bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-2xl p-6 shadow-sm dark:shadow-lg dark:shadow-black/10 hover:shadow-md dark:hover:shadow-lg dark:hover:shadow-black/20 transition-all duration-300 ${className}`}>
      <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100 leading-tight transition-colors duration-300">{title}</h3>
      
      {authors && (
        <div className="flex items-center mb-3 text-gray-600 dark:text-gray-400 transition-colors duration-300">
          <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
          </svg>
          <span className="text-sm">{authors}</span>
        </div>
      )}
      
      {venue && (
        <div className="flex items-center mb-3 text-gray-600 dark:text-gray-400 transition-colors duration-300">
          <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1z" clipRule="evenodd" />
          </svg>
          <span className="text-sm">{venue}</span>
        </div>
      )}
      
      {year && (
        <div className="flex items-center mb-4 text-gray-600 dark:text-gray-400 transition-colors duration-300">
          <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
          </svg>
          <span className="text-sm">{year}</span>
        </div>
      )}
      
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4 italic transition-colors duration-300">{description}</p>
      
      {status && (
        <div className="flex items-center text-gray-500 dark:text-gray-400 transition-colors duration-300">
          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1z" clipRule="evenodd" />
          </svg>
          <span className="text-sm">{status}</span>
        </div>
      )}
    </div>
  );
};

ResearchCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  authors: PropTypes.string,
  venue: PropTypes.string,
  year: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  status: PropTypes.string,
  className: PropTypes.string
};

export default ResearchCard;