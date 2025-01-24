"use client";

import { usePokemonDetails } from "@/hooks/usePokemonDetails";
import { usePokemonListByType } from "@/hooks/usePokemonListByType";
import {
  Button,
  Card,
  CardBody,
  Chip,
  Image,
  Tab,
  Tabs,
  Spinner,
} from "@heroui/react";
import { ChevronLeftIcon, HeartIcon } from "lucide-react";
import Link from "next/link";
import PokemonList from "../PokemonList";

function PokemonDetails({ name }: { name: string }) {
  const { data, isLoading, isError, error } = usePokemonDetails(name);

  const pokemonType = data?.types[0]?.type?.name;
  const { data: pokemonList, isLoading: isLoadingList } = usePokemonListByType(
    pokemonType ?? ""
  );

  if (isLoading || !pokemonType || isLoadingList)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Spinner size="lg" />
      </div>
    );
  if (isError) return <div>Error: {error.message}</div>;

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

              {/* Right column with details */}
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <p className="text-gray-500 text-xl mb-2">#001</p>
                    <h1 className="text-4xl font-bold mb-2">Bulbasaur</h1>
                    <p className="text-gray-600 mb-4">Seed Pokémon</p>
                    <div className="flex gap-2">
                      <Chip color="success" variant="flat">
                        Grass
                      </Chip>
                      <Chip color="secondary" variant="flat">
                        Poison
                      </Chip>
                    </div>
                  </div>
                </div>

                <div className="flex w-full flex-col">
                  <Tabs
                    aria-label="Pokemon information"
                    className="mb-6"
                    items={[
                      {
                        id: "about",
                        label: "About",
                        content: (
                          <div className="py-4">
                            <p className="text-gray-600 mb-6">
                              Having been domesticated from birth, Bulbasaur is
                              regarded as both a rare and well-behaved Pokémon.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                              <div className="flex items-center gap-2">
                                <span className="text-gray-500">Weight:</span>
                                <span className="font-medium">
                                  6.9 kg (15.2 lbs)
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="text-gray-500">Height:</span>
                                <span className="font-medium">0.7 m</span>
                              </div>
                            </div>
                          </div>
                        ),
                      },
                      {
                        id: "stats",
                        label: "Stats",
                        content: (
                          <div className="py-4">
                            <p className="text-gray-600">
                              Stats content goes here
                            </p>
                          </div>
                        ),
                      },
                      {
                        id: "moves",
                        label: "Moves",
                        content: (
                          <div className="py-4">
                            <p className="text-gray-600">
                              Moves content goes here
                            </p>
                          </div>
                        ),
                      },
                      {
                        id: "evolutions",
                        label: "Evolutions",
                        content: (
                          <div className="py-4">
                            <p className="text-gray-600">
                              Evolutions content goes here
                            </p>
                          </div>
                        ),
                      },
                      {
                        id: "location",
                        label: "Location",
                        content: (
                          <div className="py-4">
                            <p className="text-gray-600">
                              Location content goes here
                            </p>
                          </div>
                        ),
                      },
                    ]}
                  >
                    {(item) => (
                      <Tab key={item.id} title={item.label}>
                        {item.content}
                      </Tab>
                    )}
                  </Tabs>
                </div>
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
