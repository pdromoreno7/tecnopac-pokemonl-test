import { getPokemonDetails } from '@/api/pokemon';
import { useQuery } from '@tanstack/react-query';

export function usePokemonDetails(name: string) {
  return useQuery({
    queryKey: ['pokemon', name],

    queryFn: () => getPokemonDetails(name),
    enabled: !!name,
    retry: true,
  });
}
