import React from 'react';
import './rate.scss'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function Rate({ logements }) {
    // Vérifiez si logements est un tableau non vide et s'il existe un currentLogement.
    if (!logements || logements.length === 0) {
        return <div className="accomodation_right">Aucune donnée de notation disponible</div>;
    }

    const currentLogement = logements[0];

    // Vérifiez si currentLogement existe et s'il a la propriété 'rating'.
    if (!currentLogement || !currentLogement.rating) {
        return <div className="accomodation_right">Aucune étoiles de notation disponible</div>;
    }

    const rating = parseFloat(currentLogement.rating); // Convertissez la chaîne "rating" en un nombre à virgule flottante.

    // Créez un tableau de 5 étoiles (5 faStar) que vous allez afficher en fonction de la valeur de "rating".
    const stars = [];
    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            stars.push(<FontAwesomeIcon key={i} icon={faStar} style={{ color: 'gold' }} />);
        } else {
            stars.push(<FontAwesomeIcon key={i} icon={faStar} style={{ color: 'gray' }} />);
        }
    }

    return (
        <div className="accomodation_right">
            <div className="accomodation_host">
                {currentLogement.host && (
                    <div>
                        <span className="host">{currentLogement.host.name}</span>
                        <img className="img" src={currentLogement.host.picture} alt="photo profil" />
                    </div>
                )}
            </div>
            <div className="accomodation_rating">
                {stars}
            </div>
        </div>
    );
}

export default Rate;