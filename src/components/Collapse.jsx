import React, { useState } from 'react';
import '../pages/styles.scss';
import '../components/collapse.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

function Collapse({ title, content }) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="about-container">
      <article className="about-tab" onClick={toggleCollapse}>
        <h3 className="about-text">{title}</h3>
        <button className="about-button" onClick={toggleCollapse}>
          <FontAwesomeIcon icon={isCollapsed ? faChevronUp : faChevronDown} />
        </button>
      </article>
      {!isCollapsed && <p className="about-caption">{content}</p>}
    </div>
  );
}

export default Collapse;
