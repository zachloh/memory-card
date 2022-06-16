import React from 'react';
import styles from './Score.module.css';

const Score = () => {
  return (
    <div className={styles['score-container']}>
      <div className={styles.current}>Current score: 0</div>
      <div className={styles.best}>Best score: 0</div>
    </div>
  );
};

export default Score;
