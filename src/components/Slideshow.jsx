import React, { useState, useEffect } from 'react';
import './slideshow.scss'; // Importez les styles pour le carrousel si nécessaire

function Slideshow() {
  const [logements, setLogements] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Chargez les données de logements depuis le fichier JSON
    fetch('/chemin/vers/logements.json')
      .then((response) => response.json())
      .then((data) => {
        setLogements(data);
      })
      .catch((error) => {
        console.error('Erreur lors du chargement des données de logements :', error);
      });
  }, []);

  // Fct image suivante
  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === logements.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Fct retour arrière image
  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? logements.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slideshow">
      {logements.length > 0 && (
        <>
          <img src={logements[currentIndex].pictures} />
          <button onClick={prevImage}>Précédent</button>
          <button onClick={nextImage}>Suivant</button>
        </>
      )}
    </div>
  );
}

export default Slideshow;
