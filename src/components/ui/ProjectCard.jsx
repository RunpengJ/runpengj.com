import PropTypes from 'prop-types';
import { Image, Github, ExternalLink } from 'lucide-react';

/**
 * Project card component with horizontal layout and image placeholder
 */
const ProjectCard = ({ title, description, tags, className = "", gradientIndex = 0, githubUrl, liveUrl }) => {
  // Different gradient styles for variety
  const gradients = [
    "bg-gradient-to-br from-gray-100 to-gray-200",
    "bg-gradient-to-br from-gray-200 to-gray-100",
    "bg-gradient-to-br from-gray-150 to-gray-250"
  ];
  
  const gradientClass = gradients[gradientIndex % gradients.length] || gradients[0];
  
  return (
    <div className={`bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 ${className}`}>
      <div className="flex flex-col sm:flex-row gap-6">
        {/* Project Image Placeholder */}
        <div className="flex-shrink-0">
          <div className={`min-w-[200px] h-[150px] ${gradientClass} border border-gray-200 rounded-xl flex items-center justify-center`}>
            <div className="text-center text-gray-500">
              <Image className="w-8 h-8 mx-auto mb-1 opacity-50" />
              <span className="text-xs font-medium">Project Preview</span>
            </div>
          </div>
        </div>
        
        {/* Project Content */}
        <div className="flex-1 flex flex-col">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
            <div className="flex gap-3">
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-900 transition-colors duration-200"
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
                  className="text-gray-500 hover:text-gray-900 transition-colors duration-200"
                  title="View Live Demo"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>
          <p className="text-gray-600 mb-4 flex-grow">{description}</p>
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-auto">
              {tags.map((tag, index) => (
                <span 
                  key={index}
                  className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded font-medium"
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
  liveUrl: PropTypes.string
};

export default ProjectCard;