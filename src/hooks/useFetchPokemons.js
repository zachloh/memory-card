import { useEffect, useState } from 'react';
import { fetchPokemonSprites } from '../lib/fetchPokemons';
import { shuffleArray } from '../utils/shuffleArray';

export const useFetchPokemons = () => {
  const [pokemonCards, setPokemonCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPokemonCards = async () => {
      try {
        setIsLoading(true);
        const pokemons = await fetchPokemonSprites();
        setPokemonCards(shuffleArray(pokemons));
      } catch (err) {
        setError(err.message);
      }
      setIsLoading(false);
    };

    loadPokemonCards();
  }, []);

  return {
    pokemonCards,
    setPokemonCards,
    isLoading,
    error,
  };
};
