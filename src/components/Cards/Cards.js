import React from 'react';
import { useFetchPokemons } from '../../hooks/useFetchPokemons';
import PokeballLoader from '../../UI/PokeballLoader';
import CardItem from './CardItem/CardItem';
import styles from './Cards.module.css';

const Cards = () => {
  const { isLoading, error, pokemonCards } = useFetchPokemons();

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
          return <CardItem key={card.id} card={card} />;
        })}
    </div>
  );
};

export default Cards;
