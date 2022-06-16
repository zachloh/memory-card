import React from 'react';
import styles from './CardItem.module.css';

const CardItem = ({ card }) => {
  return (
    <button className={styles.card}>
      <img
        src={card.sprite}
        id={card.id}
        alt={card.name}
        className={styles.pokemon}
      />
      <p className={styles.name}>{card.name}</p>
    </button>
  );
};

export default CardItem;
