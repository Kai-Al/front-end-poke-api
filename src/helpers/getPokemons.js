export const getAllPokemon = async () => {
    const url = `https://pokeapi.co/api/v2/pokemon/`;
    let data = await fetch(url).then(results => {
      return results.json();
    });
    const pokemonList = await Promise.all(data.results.map(pokemon => getPokemon(pokemon.name)));
    const pokemonListFiltered = pokemonList.map(pokemon => ({
      name: pokemon.name,
      image: pokemon.sprites.front_default,
      types: pokemon.types.map(type => type.type.name),
    }));
    return pokemonListFiltered;
  };

export const getPokemon = async (pokemon) => {

    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    const pokemonFound = await fetch(url).then(results => {
        return results.json();
    })
    return pokemonFound
}
