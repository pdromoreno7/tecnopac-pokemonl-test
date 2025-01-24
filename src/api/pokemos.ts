"use server";

import { apiClient, POKE_API_URL } from "./axiosClient";

async function fetchPokemonDetails(pokemonUrls) {
  const requests = pokemonUrls.map((url) =>
    apiClient.get(url.replace(POKE_API_URL, ""))
  );
  const responses = await Promise.all(requests);
  return responses.map((response) => response.data); // Extraer `data` de cada respuesta
}
export async function getPokemons(offset = 0, limit = 20) {
  try {
    const response = await apiClient.get(
      `/pokemon?offset=${offset}&limit=${limit}`
    );
    const data = response.data;

    // Obtener los detalles de cada Pokémon
    const detailedPokemon = await fetchPokemonDetails(
      data.results.map((p) => p.url)
    );

    return detailedPokemon;
  } catch (error) {
    console.error("Error fetching Pokémon list:", error);
    throw new Error("Failed to fetch Pokémon list");
  }
}

export async function getPokemonDetails(pokemonName: string) {
  try {
    const response = await apiClient.get(`/pokemon/${pokemonName}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching Pokemon details:", error);
    throw error;
  }
}
