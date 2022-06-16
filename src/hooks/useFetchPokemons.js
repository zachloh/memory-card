import { useEffect, useState } from 'react';
import { fetchPokemonSprites } from '../lib/fetchPokemons';

export const useFetchPokemons = () => {
  const [pokemonCards, setPokemonCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPokemonCards = async () => {
      try {
        setIsLoading(true);
        const pokemons = await fetchPokemonSprites();
        setPokemonCards(pokemons);
      } catch (err) {
        setError(err.message);
      }
      setIsLoading(false);
    };

    loadPokemonCards();
  }, []);

  return {
    pokemonCards,
    isLoading,
    error,
  };
};
