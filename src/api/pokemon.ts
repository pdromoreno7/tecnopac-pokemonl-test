'use server';

import { pokemonType } from '@/interfaces/pokemon.interface';
import { apiClient } from './axiosClient';
import { fetchPokemonDetails } from '@/lib/fetchData';

export async function getPokemons(name?: string | null) {
  console.log('🚀 ~ getPokemons ~ name:', name);
  try {
    const response = await apiClient.get(`/pokemon${name ? `/${name}` : ''}`);
    const data = response.data;

    if (!name) {
      const detailedPokemon = await fetchPokemonDetails(data.results.map((pokemon: pokemonType) => pokemon.url));
      return detailedPokemon;
    }
    return [data];
  } catch (error) {
    console.error('Error fetching Pokémon list:', error);
    throw new Error('Failed to fetch Pokémon list');
  }
}

export async function getPokemonDetails(pokemonName?: string) {
  try {
    const response = await apiClient.get(`/pokemon/${pokemonName}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching Pokemon details:', error);
    throw error;
  }
}

export async function getPokemonsByType(pokemonType: string) {
  try {
    const response = await apiClient.get(`/type/${pokemonType}`);
    const data = response.data;
    const detailedPokemon = await fetchPokemonDetails(
      data.pokemon.map((pokemon: { pokemon: pokemonType }) => pokemon.pokemon.url)
    );

    return detailedPokemon;
  } catch (error) {
    console.error('Error fetching Pokemon details:', error);
    throw error;
  }
}
