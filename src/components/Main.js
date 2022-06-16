import React from 'react';
import Score from './Score/Score';
import Cards from './Cards/Cards';
import styles from './Main.module.css';

const Main = () => {
  return (
    <main className={styles.container}>
      <Score />
      <Cards />
    </main>
  );
};

export default Main;
