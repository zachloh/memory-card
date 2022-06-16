const NUM_OF_POKEMONS = 8;

const fetchPokemon = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Pokemons not found');
  }

  return response.json();
};

export const fetchPokemonSprites = async () => {
  const pokemonPromises = [];
  for (let i = 1; i <= NUM_OF_POKEMONS; i++) {
    pokemonPromises.push(
      fetchPokemon(`https://pokeapi.co/api/v2/pokemon/${i * 10}`)
    );
  }

  const pokemons = await Promise.all(pokemonPromises);

  // Artificially increase loading time
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });

  return pokemons.map(({ sprites, id, species }) => ({
    sprite: sprites.other.dream_world.front_default,
    name: species.name,
    id,
  }));
};
