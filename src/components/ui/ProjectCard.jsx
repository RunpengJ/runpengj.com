import PropTypes from 'prop-types';
import { Image, Github, ExternalLink } from 'lucide-react';

/**
 * Project card component with horizontal layout and image placeholder
 */
const ProjectCard = ({ title, description, tags, className = "", gradientIndex = 0, githubUrl, liveUrl, cover }) => {
  // Different gradient styles for variety
  const gradients = [
    "bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-600 dark:to-gray-700",
    "bg-gradient-to-br from-gray-200 to-gray-100 dark:from-gray-700 dark:to-gray-600",
    "bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-700 dark:to-gray-600"
  ];
  
  const gradientClass = gradients[gradientIndex % gradients.length] || gradients[0];
  
  return (
    <div className={`bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-2xl p-6 shadow-sm dark:shadow-lg dark:shadow-black/10 hover:shadow-md dark:hover:shadow-lg dark:hover:shadow-black/20 transition-all duration-300 ${className}`}>
      <div className="flex flex-col sm:flex-row gap-6">
        {/* Image Placeholder or Cover Image */}
        <div className="flex-shrink-0">
          {cover ? (
            <img 
              src={cover} 
              alt={title}
              className="min-w-[200px] h-[150px] object-cover border border-gray-200 dark:border-gray-600 rounded-xl"
            />
          ) : (
          <div className={`min-w-[200px] h-[150px] ${gradientClass} border border-gray-200 dark:border-gray-600 rounded-xl flex items-center justify-center transition-colors duration-300`}>
            <div className="text-center text-gray-500 dark:text-gray-400 transition-colors duration-300">
              <Image className="w-8 h-8 mx-auto mb-1 opacity-50" />
              <span className="text-xs font-medium">Project Preview</span>
            </div>
          </div>
          )}
        </div>
        
        {/* Project Content */}
        <div className="flex-1 flex flex-col">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 transition-colors duration-300">{title}</h3>
            <div className="flex gap-3">
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-200"
                  title="View Repository"
                >
                  <Github className="w-5 h-5" />
                </a>
              )}
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-200"
                  title="View Live Demo"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow transition-colors duration-300">{description}</p>
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-auto">
              {tags.map((tag, index) => (
                <span 
                  key={index}
                  className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs px-2 py-1 rounded font-medium transition-colors duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
  className: PropTypes.string,
  gradientIndex: PropTypes.number,
  githubUrl: PropTypes.string,
  liveUrl: PropTypes.string,
  cover: PropTypes.string
};

export default ProjectCard;