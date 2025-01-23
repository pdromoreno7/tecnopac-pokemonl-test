import { getPokemons } from "@/api/pokemos";
import PokemonCard from "../PokemonCard";

async function PokemonList() {
  const pokemons = await getPokemons();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {pokemons.results.map((pokemon) => (
        <PokemonCard key={pokemon.name} name={pokemon.name} />
      ))}
    </div>
  );
}

export default PokemonList;
