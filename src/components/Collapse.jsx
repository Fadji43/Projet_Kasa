import React, { useState } from 'react';
import '../pages/styles.scss';
import '../components/collapse.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

function Collapse({ title, content }) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="about-container">
      <article
        data-open={isCollapsed ? 'false' : 'true'}
        className={`about-tab ${isCollapsed ? '' : 'open'}`}
      >
        <h3 className="about-text">{title}</h3>
        <a onClick={toggleCollapse}>
          <FontAwesomeIcon
            icon={isCollapsed ? faChevronDown : faChevronDown}
            className={`chevron-icon ${isCollapsed ? '' : 'open'}`}
          />
        </a>
      </article>
      {isCollapsed ? null : (
        <div className='about-caption'>
          <div>{content}</div>
        </div>
      )}
    </div> 
  )}
     

export default Collapse;
