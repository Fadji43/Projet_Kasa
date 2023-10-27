import React, { useState } from 'react';
import './dropdown.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

function Dropdown({ logements }) {
  const currentLogement = logements;
  const [isDescriptionCollapsed, setIsDescriptionCollapsed] = useState(true);
  const [isEquipmentsCollapsed, setIsEquipmentsCollapsed] = useState(true);

  const toggleDescriptionCollapse = () => {
    setIsDescriptionCollapsed(!isDescriptionCollapsed);
  };

  const toggleEquipmentsCollapse = () => {
    setIsEquipmentsCollapsed(!isEquipmentsCollapsed);
  };

  return (
    <div className="dropdown_container">
      <div className="dropdown">
        <article
          data-open={isDescriptionCollapsed ? 'false' : 'true'}
          className={`about-tab ${isDescriptionCollapsed ? '' : 'open'}`}
        >
          <h3 className="dropdown-title">Description</h3>
          <a href="/" onClick={toggleDescriptionCollapse}>
            <FontAwesomeIcon
              icon={isDescriptionCollapsed ? faChevronDown : faChevronDown}
              className={`chevron-icon ${isDescriptionCollapsed ? '' : 'open'}`}
            />
          </a>
        </article>
        {isDescriptionCollapsed ? null : (
          <div className='dropdown-text'>
            <div>{currentLogement.description}</div>
          </div>
        )}
      </div>
      <div className="dropdown">
        <article
          data-open={isEquipmentsCollapsed ? 'false' : 'true'}
          className={`about-tab ${isEquipmentsCollapsed ? '' : 'open'}`}
        >
          <h3 className="dropdown-title">Équipements</h3>
          <a href="/" onClick={toggleEquipmentsCollapse}>
            <FontAwesomeIcon
              icon={isEquipmentsCollapsed ? faChevronDown : faChevronDown}
              className={`chevron-icon ${isEquipmentsCollapsed ? '' : 'open'}`}
            />
          </a>
        </article>
        {isEquipmentsCollapsed ? null : (
          <div className='dropdown-text'>
            {currentLogement.equipments.map((equipment, index) => (
              <div key={index}>{equipment}</div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Dropdown;

