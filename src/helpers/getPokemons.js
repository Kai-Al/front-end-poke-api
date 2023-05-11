const endpoint = "https://pokeapi.co/api/v2"

const getPokemonByName = async (pokemonName) => {
  const url = `${endpoint}/pokemon/${pokemonName.toLowerCase()}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const searchByName = async (pokemonName, offset = 0) => {
  const url = pokemonName
    ? `${endpoint}/pokemon/${pokemonName.toLowerCase()}`
    : `${endpoint}/pokemon/?limit=10&offset=${offset}`;

  const response = await fetch(url);
  const data = await response.json();
  if (pokemonName) {
    return [
      {
        name: data.name,
        image: data.sprites.front_default,
        types: data.types.map((type) => type.type.name),
      },
    ];
  }

  const pokemonList = await Promise.all(
    data.results.map((pokemon) => getPokemonByName(pokemon.name))
  );

  return pokemonList.map((pokemon) => ({
    name: pokemon.name,
    image: pokemon.sprites.front_default,
    types: pokemon.types.map((type) => type.type.name),
  }));
};

export const getTypes = async () => {
  const url = `${endpoint}/type`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data.results)
  return data.results;
};