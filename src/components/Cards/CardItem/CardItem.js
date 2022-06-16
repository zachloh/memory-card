import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './CardItem.module.css';

const CardItem = ({ card, onClick }) => {
  const getRandomKey = () => uuidv4();

  return (
    <button
      className={styles.card}
      onClick={() => onClick(card.id)}
      key={getRandomKey()}
    >
      <img src={card.sprite} alt={card.name} className={styles.pokemon} />
      <p className={styles.name}>{card.name}</p>
    </button>
  );
};

export default CardItem;
