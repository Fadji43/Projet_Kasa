import React from 'react';
import './description.scss'; 

function Description({logements}) {
    const currentLogement = logements;

  return (
    <div className="accomodation">
        <div className="accomodation_container">
            <div className="accomodation_left">
                <div className="accomodation_location">
                    <h2>{currentLogement.title}</h2>
                    <p>{currentLogement.location}</p>
                </div>
            </div>
        </div> 
    </div>     
)};

export default Description;