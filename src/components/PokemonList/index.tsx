import PokemonCard from '../PokemonCard';
import { PokemonDetails } from '@/interfaces/pokemon.interface';

interface PokemonListProps {
  pokemons: PokemonDetails[];
}

function PokemonList({ pokemons }: PokemonListProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
      {pokemons?.map((pokemon: PokemonDetails) => (
        <PokemonCard
          key={pokemon.id}
          image={pokemon?.sprites.other?.dream_world?.front_default}
          name={pokemon.name}
          type={pokemon.types[0].type.name}
        />
      ))}
    </div>
  );
}

export default PokemonList;
