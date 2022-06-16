import { useEffect, useState } from 'react';

export const useScore = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    if (currentScore > bestScore) {
      setBestScore(currentScore);
    }
  }, [currentScore, bestScore]);

  return {
    currentScore,
    bestScore,
    setCurrentScore,
  };
};
