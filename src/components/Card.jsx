import React from 'react';
import { Link } from 'react-router-dom';
import '../components/card.scss';
import '../pages/styles.scss';
import logementsData from '../data/logements.json'

function Card() {
  const cards = logementsData.map((item, index) => (
    <div key={index} className="Card">
      <article className="card_item">
        <Link to={`/housing/${item.id}`}>
          <img src={item.cover} alt={`Item ${item.id}`} className="card_img" />
          <div class="curtain"></div>
        </Link>
        <p className="card_title">{item.title}</p>
      </article>
    </div>
  ));

  return (
    <div className="CardContainer">
      {cards}
    </div>
  );
}

export default Card;
