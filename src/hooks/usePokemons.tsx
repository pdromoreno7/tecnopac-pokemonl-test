import { getPokemons } from '@/api/pokemon';
import { useQuery } from '@tanstack/react-query';

export function usePokemons(pokemon: string | null) {
  return useQuery({
    queryKey: [pokemon ?? 'pokemons'],
    queryFn: () => getPokemons(pokemon ?? null),
  });
}
