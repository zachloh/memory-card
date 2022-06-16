import React from 'react';
import Score from './Score/Score';
import styles from './Main.module.css';

const Main = () => {
  return (
    <main className={styles.container}>
      <Score />
    </main>
  );
};

export default Main;
