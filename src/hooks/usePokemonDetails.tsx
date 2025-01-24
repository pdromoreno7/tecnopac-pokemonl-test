import { getPokemonDetails } from "@/api/pokemos";
import { useQuery } from "@tanstack/react-query";

export function usePokemonDetails(name: string) {
  return useQuery({
    queryKey: ["pokemons"],
    queryFn: () => getPokemonDetails(name),
  });
}
