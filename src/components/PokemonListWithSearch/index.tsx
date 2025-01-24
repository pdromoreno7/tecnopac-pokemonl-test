'use client';

import PokemonList from '../PokemonList';
import SpinnerLoading from '../SpinnerLoading';
import InputSearch from './InputSearch';
import { useState } from 'react';
import { usePokemons } from '@/hooks/usePokemons';

function PokemonListWithSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPokemon, setSelectedPokemon] = useState<string | null>(null);

  const { data: pokemons, isLoading, isError } = usePokemons(selectedPokemon);
  console.log('🚀 ~ PokemonListWithSearch ~ isError:', isError);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = () => {
    setSelectedPokemon(searchTerm);
  };

  if (isLoading) return <SpinnerLoading />;

  return (
    <div>
      <InputSearch onChange={handleSearchChange} onSubmit={handleSearchSubmit} />
      {pokemons && <PokemonList pokemons={pokemons} />}
      {isError && (
        <p className="text-red-500 text-center text-2xl">
          Lo sentimos, no se encotraron pokemons con el nombre: {selectedPokemon}
        </p>
      )}
    </div>
  );
}

export default PokemonListWithSearch;
