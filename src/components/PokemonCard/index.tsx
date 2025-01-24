import { Card, CardBody, CardFooter } from '@heroui/card';
import { Image } from '@heroui/image';
import { Chip } from '@heroui/react';
import Link from 'next/link';

interface PokemonCardProps {
  name: string;
  image: string;
  type: string;
}
function PokemonCard({ name, image, type }: PokemonCardProps) {
  return (
    <Link href={`/${name}`}>
      <Card className="cursor-pointer h-[450px]">
        <CardBody>
          <Image
            alt={name}
            className="relative w-full object-contain transition-transform duration-500 ease-in-out transform hover:scale-105  "
            radius="lg"
            src={image}
            width="100%"
          />
        </CardBody>

        <CardFooter className="justify-evenly gap-4 before:bg-white/10  py-1 absolute before:rounded-xl rounded-large bottom-1 shadow-small  z-10">
          <p className="text-tiny uppercase">{name}</p>
          <Chip className="text-tiny  bg-black/20" color="success" radius="lg" variant="flat">
            {type}
          </Chip>
        </CardFooter>
      </Card>
    </Link>
  );
}

export default PokemonCard;
