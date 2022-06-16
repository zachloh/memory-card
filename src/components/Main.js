import React from 'react';
import Score from './Score/Score';
import Cards from './Cards/Cards';
import { useScore } from '../hooks/useScore';
import styles from './Main.module.css';

const Main = () => {
  const { currentScore, bestScore, setCurrentScore } = useScore();

  const handleIncrementCurrentScore = () => {
    setCurrentScore((score) => score + 1);
  };

  const handleResetScore = () => {
    setCurrentScore(0);
  };

  return (
    <main className={styles.container}>
      <Score currentScore={currentScore} bestScore={bestScore} />
      <Cards
        onIncrementScore={handleIncrementCurrentScore}
        onResetScore={handleResetScore}
      />
    </main>
  );
};

export default Main;
