import PokemonListWithSearch from '@/components/PokemonListWithSearch';

export default function Home() {
  return (
    <div className="container h-screen mx-auto p-10">
      <h1 className="text-2xl md:text-3xl font-bold md:text-center my-6">What Pokémon are you looking for?</h1>
      <PokemonListWithSearch />
    </div>
  );
}
