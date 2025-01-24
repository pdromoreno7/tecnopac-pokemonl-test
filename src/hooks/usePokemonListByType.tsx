import { getPokemonsByType } from "@/api/pokemon";
import { useQuery } from "@tanstack/react-query";

export function usePokemonListByType(pokemonType: string) {
  return useQuery({
    queryKey: [pokemonType],
    queryFn: async () => {
      if (!pokemonType) return [];
      const data = await getPokemonsByType(pokemonType);

      return data.slice(1, 21);
    },
    enabled: !!pokemonType,
  });
}
