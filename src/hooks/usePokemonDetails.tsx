import { getPokemonDetails } from "@/api/pokemon";
import { useQuery } from "@tanstack/react-query";

export function usePokemonDetails(name: string) {
  return useQuery({
    queryKey: [name],
    queryFn: () => getPokemonDetails(name),
  });
}
