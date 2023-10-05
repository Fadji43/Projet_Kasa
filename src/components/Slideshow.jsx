import React, { useState } from 'react';
import './slideshow.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';


function Slideshow({ logements }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? logements.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % logements.length);
  };

  return (
    <div className="slideshowContainer">
        <div className="slideshow">
        <button onClick={prevSlide} className="slideshow_button">
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <img
            src={logements[currentIndex].pictures}
            alt={logements[currentIndex].title}
          />
          <button onClick={nextSlide} className="slideshow_button">
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
    </div>
  );
}

export default Slideshow;
