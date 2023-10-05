import React, { useState } from 'react';
import './dropdown.scss'; 

function Dropdown({logements, description, equipments}) {
    const [isCollapsed, setIsCollapsed] = useState(true);
    const currentLogement = logements[0];
  
    const toggleCollapse = () => {
      setIsCollapsed(!isCollapsed);
    };
    return (
    <div className="dropdown_container">
        <div className="dropdown">
            <button>Description</button>
            <a onClick={toggleCollapse} className="dropdown-text">{currentLogement.description}</a>
        </div>
        <div className="dropdown">
            <button>Equipements</button>
        <a onClick={toggleCollapse} className="dropdown-text">{currentLogement.equipments}</a>
        </div>
    </div>
)}  ;
 export default Dropdown;
 