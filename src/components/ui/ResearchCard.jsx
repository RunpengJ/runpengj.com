import PropTypes from 'prop-types';

/**
 * Research card component with detailed academic layout
 */
const ResearchCard = ({ title, description, authors, venue, year, status, links = {}, className = "" }) => {
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
      
      {/* Links Section */}
      <div className="flex flex-wrap gap-2">
        {links.paper && (
          <a
            href={links.paper}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 border border-blue-200 dark:border-blue-600 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors duration-200"
          >
            <svg className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
            </svg>
            Paper
          </a>
        )}
        
        {links.poster && (
          <a
            href={links.poster}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 border border-green-200 dark:border-green-600 rounded-lg hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors duration-200"
          >
            <svg className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
            </svg>
            Poster
          </a>
        )}
      </div>
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
  links: PropTypes.shape({
    paper: PropTypes.string,
    poster: PropTypes.string,
    github: PropTypes.string
  }),
  className: PropTypes.string
};

export default ResearchCard;