import React from 'react';
import styles from './Score.module.css';

const Score = ({ currentScore, bestScore }) => {
  return (
    <div className={styles['score-container']}>
      <div className={styles.current}>Current score: {currentScore}</div>
      <div className={styles.best}>Best score: {bestScore}</div>
    </div>
  );
};

export default Score;
