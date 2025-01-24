import { getDescriptionPokemon } from '@/api/openAI';
import { getPokemonDetails } from '@/api/pokemon';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

export function usePokemonDetails(name: string) {
  const [description, setDescription] = useState('');
  const [isLoadingDescription, setIsLoadingDescription] = useState(false);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['pokemon', name],

    queryFn: () => getPokemonDetails(name),
    enabled: !!name,
    retry: true,
  });
  const getDescription = async () => {
    try {
      setIsLoadingDescription(true);
      const result = await getDescriptionPokemon(name);

      setDescription(result?.recipe?.pokemonDescription ?? '');
      setIsLoadingDescription(false);
    } catch (error) {
      setIsLoadingDescription(false);
      console.error('Error fetching Pokemon details:', error);
    }
  };

  useEffect(() => {
    getDescription();
  }, []);

  return {
    isLoadingDescription,
    data,
    isLoading,
    isError,
    error,
    description,
  };
}
