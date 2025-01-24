import { getPokemons } from "@/api/pokemos";
import PokemonCard from "../PokemonCard";
import { PokemonDetails } from "@/interfaces/pokemon.interface";

async function PokemonList() {
  const pokemons = await getPokemons();
  console.log("🚀 ~ PokemonList ~ pokemons:", pokemons);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {pokemons.map((pokemon: PokemonDetails) => (
        <PokemonCard
          key={pokemon.id}
          image={pokemon?.sprites.other?.dream_world?.front_default}
          name={pokemon.name}
        />
      ))}
    </div>
  );
}

export default PokemonList;
