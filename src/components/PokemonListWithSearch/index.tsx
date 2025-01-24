'use client';

import PokemonList from '../PokemonList';
import SpinnerLoading from '../SpinnerLoading';
import InputSearch from './InputSearch';
import { useState } from 'react';
import { usePokemons } from '@/hooks/usePokemons';

function PokemonListWithSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  console.log('🚀 ~ PokemonListWithSearch ~ searchTerm:', searchTerm);
  const [selectedPokemon, setSelectedPokemon] = useState<string | null>(null);

  const { data: pokemons, isLoading, isError, error } = usePokemons(selectedPokemon);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = () => {
    setSelectedPokemon(searchTerm);
  };

  if (isLoading) return <SpinnerLoading />;
  if (isError) return <div>Error: {error.message}</div>;
  return (
    <div>
      <InputSearch onChange={handleSearchChange} onSubmit={handleSearchSubmit} />
      {pokemons && <PokemonList pokemons={pokemons} />}
    </div>
  );
}

export default PokemonListWithSearch;
