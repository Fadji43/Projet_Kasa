import React, { useState } from 'react';
import './slideshow.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

function Slideshow({ logements }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? logements.pictures.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % logements.pictures.length);
  };

  // Vérifiesi logements est défini et que pictures contient des images
  if (!logements || !logements.pictures || logements.pictures.length === 0) {
    return <div>Aucune image disponible.</div>;
  }

  return (
  
      <div className="slideshow">
          <img className="slideshow_img" src={logements.pictures[currentIndex]} alt={`caroussel logement ${currentIndex + 1}`} />
          <button onClick={prevSlide} className="slideshow_button slideshow_button--left">
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button onClick={nextSlide} className="slideshow_button slideshow_button--right">
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
          <div className="photoCount">{currentIndex + 1}/{logements.pictures.length}</div>
        </div>
 
    
  );
  
}

export default Slideshow;
