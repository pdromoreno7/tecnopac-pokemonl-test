import { apiClient, POKE_API_URL } from "@/api/axiosClient";

export async function fetchPokemonDetails(pokemonUrls: string[]) {
  const requests = pokemonUrls.map((url) =>
    apiClient.get(url.replace(POKE_API_URL, ""))
  );
  const responses = await Promise.all(requests);
  return responses.map((response) => response.data);
}
