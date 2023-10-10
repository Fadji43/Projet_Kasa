import React from 'react';
import './rate.scss'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function Rate({ logements }) {
  if (!logements || !logements.rating) {
    return null;
  }

  const rating = parseFloat(logements.rating);

  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(<FontAwesomeIcon key={i} icon={faStar} style={{ color: 'gold' }} />);
    } else {
      stars.push(<FontAwesomeIcon key={i} icon={faStar} style={{ color: 'gray' }} />);
    }
  }

  return (
      <div className="accomodation_host">
        {logements.host && (
          <div className=''>
            <span className="host">{logements.host.name}</span>
            <img className="img" src={logements.host.picture} alt="photo profil" />
          </div>
        )}
        <div className="accomodation_rating">
          {stars}
        </div>
      </div>
  );
}

export default Rate;
