import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Section from '../ui/Section';
import { experiences } from '../../data/experiences';

const ExperienceCard = ({ experience, index }) => {
  const experienceNumber = String(index + 1).padStart(2, '0');

  return (
    <div className="flex-shrink-0 w-80 md:w-72 lg:w-80 group">
      <div className="relative bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300 h-full overflow-hidden">
        {/* Experience number in background */}
        <div className="absolute top-4 right-4 text-6xl font-bold text-gray-100 dark:text-gray-700 opacity-30 select-none pointer-events-none">
          {experienceNumber}
        </div>
        
        {/* Date badge */}
        <div className="inline-block px-3 py-1 bg-teal-50 dark:bg-teal-900/20 text-teal-700 dark:text-teal-300 text-xs font-semibold rounded-full mb-4">
          {experience.date}
        </div>
        
        {/* Role */}
        <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors mb-2 relative z-10">
          {experience.role}
        </h3>
        
        {/* Company */}
        <p className="text-base text-gray-700 dark:text-gray-300 font-medium mb-1 relative z-10">
          {experience.company}
        </p>
        
        {/* Location */}
        <p className="text-sm text-gray-500 dark:text-gray-400 relative z-10">
          {experience.location}
        </p>
      </div>
    </div>
  );
};

ExperienceCard.propTypes = {
  experience: PropTypes.shape({
    id: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired,
  index: PropTypes.number.isRequired,
};

const Experience = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1);
  const carouselRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Calculate cards per view based on viewport
  useEffect(() => {
    const updateCardsPerView = () => {
      const width = window.innerWidth;
      if (width >= 1280) {
        setCardsPerView(4);
      } else if (width >= 1024) {
        setCardsPerView(3);
      } else if (width >= 768) {
        setCardsPerView(2);
      } else {
        setCardsPerView(1);
      }
    };

    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);

  // Update scroll button states  
  const updateScrollButtons = () => {
    setCanScrollLeft(currentIndex > 0);
    // Calculate max scroll position to ensure last card is fully visible
    const maxScrollIndex = Math.max(0, experiences.length - cardsPerView);
    setCanScrollRight(currentIndex < maxScrollIndex);
  };

  useEffect(() => {
    updateScrollButtons();
  }, [currentIndex, cardsPerView]);

  const scrollLeft = () => {
    if (canScrollLeft) {
      setCurrentIndex(prev => Math.max(0, prev - 1));
    }
  };

  const scrollRight = () => {
    if (canScrollRight) {
      const maxScrollIndex = Math.max(0, experiences.length - cardsPerView);
      setCurrentIndex(prev => Math.min(maxScrollIndex, prev + 1));
    }
  };

  const goToExperience = (index) => {
    // Ensure the selected experience is visible by calculating the best scroll position
    const maxScrollIndex = Math.max(0, experiences.length - cardsPerView);
    const targetIndex = Math.min(index, maxScrollIndex);
    setCurrentIndex(targetIndex);
  };

  return (
    <Section id="experience" title="Experience" maxWidth="max-w-7xl">
      <div className="relative">
        {/* Navigation arrows */}
        {experiences.length > cardsPerView && (
          <>
            <button
              onClick={scrollLeft}
              disabled={!canScrollLeft}
              className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 shadow-lg transition-all duration-200 ${
                canScrollLeft 
                  ? 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-teal-500 hover:text-teal-600 cursor-pointer' 
                  : 'text-gray-400 dark:text-gray-500 cursor-not-allowed opacity-50'
              }`}
            >
              <svg className="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={scrollRight}
              disabled={!canScrollRight}
              className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 shadow-lg transition-all duration-200 ${
                canScrollRight 
                  ? 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-teal-500 hover:text-teal-600 cursor-pointer' 
                  : 'text-gray-400 dark:text-gray-500 cursor-not-allowed opacity-50'
              }`}
            >
              <svg className="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {/* Carousel container */}
        <div className="overflow-hidden mx-12">
          <div 
            ref={carouselRef}
            className="flex gap-6 transition-transform duration-500 ease-out pl-2 pr-2"
            style={{ 
              transform: `translateX(-${currentIndex * (320 + 24)}px)`
            }}
          >
            {experiences.map((experience, index) => (
              <ExperienceCard 
                key={experience.id}
                experience={experience} 
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Dot indicators - One dot per experience */}
        {experiences.length > 1 && (
          <div className="flex justify-center gap-1.5 mt-8">
            {experiences.map((_, index) => (
              <button
                key={index}
                onClick={() => goToExperience(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? 'bg-gray-700 dark:bg-gray-300 w-8'
                    : 'bg-gray-400 dark:bg-gray-600 hover:bg-gray-500 dark:hover:bg-gray-500'
                }`}
                aria-label={`Go to experience ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </Section>
  );
};

export default Experience;