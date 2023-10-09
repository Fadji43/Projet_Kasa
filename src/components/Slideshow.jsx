import React, { useState } from 'react';
import './slideshow.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';


function Slideshow({ logements }) {
  const currentLogement = logements;
  const [setCurrentIndex] = useState(true);
  

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? logements.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % logements.length);
  };

  // Vérifier si logements est défini et que currentIndex est dans les limites du tableau
  if (!logements || logements.length === 0) {
    return <div>Aucune donnée de logement disponible.</div>;
  }

  return (
    <div className="slideshowContainer">
      <div className="slideshow">
        <button onClick={prevSlide} className="slideshow_button">
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <img className='slideshow_img' src={currentLogement.pictures[0]}/>
        <button onClick={nextSlide} className="slideshow_button">
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
}

export default Slideshow;
