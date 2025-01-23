interface PokemonDatailsPageProps {
  params: Promise<{
    pokemonName: string[];
  }>;
}
async function PokemonDatailsPage({ params }: PokemonDatailsPageProps) {
  const { pokemonName } = await params;
  return <div>{pokemonName}</div>;
}

export default PokemonDatailsPage;
