'use client';

import { usePokemonDetails } from '@/hooks/usePokemonDetails';
import { usePokemonListByType } from '@/hooks/usePokemonListByType';
import { Button, Card, CardBody, Chip, Image } from '@heroui/react';
import { ChevronLeftIcon, HeartIcon } from 'lucide-react';
import Link from 'next/link';
import PokemonList from '../PokemonList';
import SpinnerLoading from '../SpinnerLoading';
import SectionTabsPolemon from './SectionTabsPolemon';
import { abilites } from '@/interfaces/pokemon.interface';

function PokemonDetails({ name }: { name: string }) {
  const { data, isLoading, isError, error, description, isLoadingDescription } = usePokemonDetails(name);

  const pokemonType = data?.types[0]?.type?.name;
  const { data: pokemonList } = usePokemonListByType(pokemonType ?? '');

  if (isLoading) return <SpinnerLoading />;
  if (isError) return <div>Error: {error?.message}</div>;

  return (
    <div className="min-h-screen  from-green-100 to-green-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <Button
            variant="light"
            startContent={<ChevronLeftIcon className="w-5 h-5" />}
            className="text-lg"
            as={Link}
            href="/"
          >
            Back
          </Button>
          <Button isIconOnly variant="light" aria-label="Like">
            <HeartIcon className="w-6 h-6" />
          </Button>
        </div>

        <Card className=" backdrop-blur-sm">
          <CardBody className="p-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left column with image */}
              <div className="p-8 flex items-center justify-center  rounded-t-xl md:rounded-l-xl md:rounded-tr-none bg-gradient-to-br from-green-100 to-green-50">
                <Image
                  src={data.sprites?.other?.dream_world?.front_default}
                  alt="Bulbasaur"
                  className="relative w-96 h-96 object-contain transition-transform duration-500 ease-in-out transform hover:scale-105 "
                />
              </div>

              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <p className="text-gray-500 text-xl mb-2">{`#0${data.id}`}</p>
                    <h1 className="text-4xl font-bold mb-2">{data.name}</h1>
                    <p className="text-gray-600 mb-4">Seed Pokémon</p>
                    <div className="flex gap-2">
                      <Chip color="success" variant="flat">
                        {data.types[0].type.name}
                      </Chip>
                      {data.abilities.map((ability: abilites) => (
                        <Chip key={ability.ability.name} color="secondary" variant="flat">
                          {ability.ability.name}
                        </Chip>
                      ))}
                    </div>
                  </div>
                </div>

                <SectionTabsPolemon
                  isLoadingDescription={isLoadingDescription}
                  description={description}
                  weight={data.weight}
                  height={data.height}
                />
              </div>
            </div>
          </CardBody>
        </Card>
        <div>
          <h2 className="text-2xl font-bold mt-8 mb-4">Related Pokemons</h2>
          {pokemonList && <PokemonList pokemons={pokemonList} />}
        </div>
      </div>
    </div>
  );
}

export default PokemonDetails;
