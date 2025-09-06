import { useState } from 'react';
import Section from '../ui/Section';
import { siteConfig } from '../../data/config';
import { ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * About section component with photo carousel and text content in 50/50 layout
 */
const About = () => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  
  // Placeholder photos - replace with actual photo URLs
  const photos = [
    { id: 1, src: '../../../public/about/1.jpeg', alt: 'Main photo' },
    { id: 2, src: '../../../public/about/2.jpeg', alt: 'Photo 2' },
    { id: 3, src: '../../../public/about/3.jpeg', alt: 'Photo 3' },
    { id: 4, src: '../../../public/about/4.jpeg', alt: 'Photo 4' },
  ];

  const handlePrevPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  const handleNextPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  };

  return (
    <Section 
      id="about" 
      title={siteConfig.about.title}
      maxWidth="max-w-5xl"
    >
      <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12 xl:gap-16">
        {/* Photo Carousel - 50% width on desktop */}
        <div className="w-full lg:w-1/2 flex-shrink-0">
          <div className="relative max-w-sm mx-auto lg:max-w-full">
            {/* Photo Container */}
            <div className="relative h-[400px] bg-gray-200 dark:bg-gray-700 rounded-2xl overflow-hidden">
              {/* Stacked Photos Effect */}
              <div className="absolute inset-0">
                {photos.map((photo, index) => (
                  <div
                    key={photo.id}
                    className={`absolute inset-0 transition-all duration-500 ${
                      index === currentPhotoIndex 
                        ? 'opacity-100 translate-x-0' 
                        : index < currentPhotoIndex 
                        ? 'opacity-0 -translate-x-full' 
                        : 'opacity-0 translate-x-full'
                    }`}
                  >
                    {/* Uncomment and use this when you have actual photos: */}
                    <img 
                      src={photo.src} 
                      alt={photo.alt}
                      className="w-full h-full object-cover"
                    />
                   
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={handlePrevPhoto}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-800 transition-all duration-200 hover:scale-110"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <button
                onClick={handleNextPhoto}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-800 transition-all duration-200 hover:scale-110"
                aria-label="Next photo"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Photo Indicators */}
            <div className="flex justify-center gap-1.5 mt-4">
              {photos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPhotoIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    index === currentPhotoIndex 
                      ? 'bg-gray-700 dark:bg-gray-300 w-8' 
                      : 'bg-gray-400 dark:bg-gray-600 hover:bg-gray-500 dark:hover:bg-gray-500'
                  }`}
                  aria-label={`Go to photo ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* About Text Content - 50% width on desktop */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <div className="space-y-4">
            {siteConfig.about.description.map((paragraph, index) => (
              <p 
                key={index} 
                className="text-sm sm:text-base lg:text-lg leading-relaxed text-gray-600 dark:text-gray-400 text-left transition-colors duration-300"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;