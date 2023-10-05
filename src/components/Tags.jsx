import React from 'react';
import './tags.scss'; 

function Tags({logements}) {
    const currentLogement = logements[0];
 // Vérifiez si des tags existent dans le logement actuel
 if (!currentLogement || !currentLogement.tags || currentLogement.tags.length === 0) {
    return null; // Si aucun tag n'est présent, ne rien afficher
}

return (
    <div className="accomodation_tags">
        <div className="tags-container">
            {currentLogement.tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
            ))}
        </div>
    </div>
);
}

export default Tags;