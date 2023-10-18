import React from 'react';
import './rate.scss'; 
import '../pages/styles.scss';
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
      stars.push(
        <FontAwesomeIcon className="star" key={i} icon={faStar} style={{ color: '#FF6060', fontSize: '24px' }} />
      );
      
    } else {
      stars.push(
        <FontAwesomeIcon className="star" key={i} icon={faStar} style={{ color: '#F6F6F6', fontSize: '24px' }} />
      );
      
    }
  }

  return (
      <div className="accomodation_host">
        {logements.host && (
          <div className='profil'>
            <span className="host">{logements.host.name}</span>
            <img className="host_img" src={logements.host.picture} alt="photo profil" />
          </div>
        )}
        <div className="accomodation_rating">
          {stars}
        </div>
      </div>
  );
}

export default Rate;
