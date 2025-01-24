import PokemonDetails from '@/components/PokemonDetails';

interface PokemonDatailsPageProps {
  params: Promise<{
    pokemonName: string;
  }>;
}
async function PokemonDatailsPage({ params }: PokemonDatailsPageProps) {
  const { pokemonName } = await params;
  return (
    <div>
      <PokemonDetails name={pokemonName} />
    </div>
  );
}

export default PokemonDatailsPage;
