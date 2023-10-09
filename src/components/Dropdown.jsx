import React, { useState } from 'react';
import './dropdown.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

function Dropdown({ logements }) {
  const currentLogement = logements;
  const [isCollapsed, setIsCollapsed] = useState({ description: true, equipments: true });

  
    const toggleCollapse = () => {
      setIsCollapsed(!isCollapsed);
    };
  
  return (
    <div className="dropdown_container">
      <div className="dropdown">
        <article data-open={isCollapsed ? 'false' : 'true'} className={`about-tab ${isCollapsed ? '' : 'open'}`}>
          <h3 className="dropdown-title">Description</h3>
          <a onClick={toggleCollapse}>
            <FontAwesomeIcon
              icon={isCollapsed ? faChevronDown : faChevronDown}
              className={`chevron-icon ${isCollapsed ? '' : 'open'}`} />
          </a>
        </article>
        <div className='dropdown-text'>
          {!isCollapsed && <div >{currentLogement.description}</div>}
        </div>  
      </div>  
      <div className="dropdown">
        <article data-open={isCollapsed ? 'false' : 'true'} className={`about-tab ${isCollapsed ? '' : 'open'}`}>
          <h3 className="dropdown-title">Equipements</h3>
          <a onClick={toggleCollapse}>
            <FontAwesomeIcon
              icon={isCollapsed ? faChevronDown : faChevronDown}
              className={`chevron-icon ${isCollapsed ? '' : 'open'}`} />
          </a>
        </article>
        <div className='dropdown-text'>
          {!isCollapsed && <div >{currentLogement.equipments}</div>}
        </div>
      </div> 
    </div>
  );
}



  
export default Dropdown;
