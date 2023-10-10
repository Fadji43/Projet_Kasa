import React from 'react';
import './tags.scss'; 

function Tags({ logements }) {
  if (!logements || !logements.tags || logements.tags.length === 0) {
    return null;
  }

  return (
    <div className="accomodation_tags">
      <div className="tags-container">
        {logements.tags.map((tag, index) => (
          <span key={index} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Tags;
