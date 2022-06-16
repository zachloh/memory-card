import React, { useState } from 'react';

import { useFetchPokemons } from '../../hooks/useFetchPokemons';
import { shuffleArray } from '../../utils/shuffleArray';

import PokeballLoader from '../../UI/PokeballLoader';
import CardItem from './CardItem/CardItem';
import styles from './Cards.module.css';

const Cards = ({ onIncrementScore, onResetScore }) => {
  const { isLoading, error, pokemonCards, setPokemonCards } =
    useFetchPokemons();
  const [picks, setPicks] = useState([]);

  const shuffleCards = () => {
    setPokemonCards(shuffleArray(pokemonCards));
  };

  const handleClick = (id) => {
    if (picks.includes(id)) {
      onResetScore();
      setPicks([]);
      shuffleCards();
      return;
    }

    onIncrementScore();
    setPicks((picks) => [...picks, id]);
    shuffleCards();
  };

  return (
    <div className={styles.container}>
      {isLoading && <PokeballLoader />}
      {error && (
        <p className={styles.error}>
          Pokemons not found. Please try again later.
        </p>
      )}
      {!isLoading &&
        !error &&
        pokemonCards.map((card) => {
          return <CardItem key={card.id} card={card} onClick={handleClick} />;
        })}
    </div>
  );
};

export default Cards;
