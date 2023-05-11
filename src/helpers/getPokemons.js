export const searchPokemon = async (pokemonName, offset = 0) => {
  let pokemonList = [];

  console.log(offset);
  if (pokemonName === "") {
    pokemonList = await getAllPokemon(offset);
  } else {
    pokemonList = [await getPokemon(pokemonName)];
  }
  const pokemonListFiltered = pokemonList.map((pokemon) => ({
    name: pokemon.name,
    image: pokemon.sprites.front_default,
    types: pokemon.types.map((type) => type.type.name),
  }));
  return pokemonListFiltered;
};

const getAllPokemon = async (offset) => {
  const url = `https://pokeapi.co/api/v2/pokemon/?limit=10&offset=${offset}`;
  let data = await fetch(url).then((results) => {
    return results.json();
  });
  const pokemonList = await Promise.all(
    data.results.map((pokemon) => getPokemon(pokemon.name))
  );
  return pokemonList;
};

const getPokemon = async (pokemonName) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`;
  const pokemonFound = await fetch(url).then((results) => {
    return results.json();
  });
  return pokemonFound;
};