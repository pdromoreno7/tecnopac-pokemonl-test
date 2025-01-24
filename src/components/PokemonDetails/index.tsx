"use client";

import { usePokemonDetails } from "@/hooks/usePokemonDetails";
import { Image } from "@heroui/react";

function PokemonDetails({ name }: { name: string }) {
  const { data, isLoading, isError, error } = usePokemonDetails(name);

  if (isLoading) return <div>Cargando...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div>
      <div>
        <Image
          src={data.sprites.other?.dream_world?.front_default}
          alt={data.name}
        />
      </div>
    </div>
  );
}

export default PokemonDetails;
