import { Card, CardBody, CardFooter } from "@heroui/card";
import { Image } from "@heroui/image";
import Link from "next/link";

interface PokemonCardProps {
  name: string;
  image: string;
}
function PokemonCard({ name, image }: PokemonCardProps) {
  return (
    <Link href={`/${name}`}>
      <Card className="cursor-pointer h-[450px]">
        <CardBody>
          <Image
            alt={name}
            className="relative w-full object-contain transition-transform duration-500 ease-in-out transform hover:scale-105"
            // className="relative w-96 h-96 object-contain transition-transform duration-500 ease-in-out transform hover:scale-105"
            radius="lg"
            src={image}
            width="100%"
          />
        </CardBody>
        <CardFooter className="text-small justify-between">
          <b>{name}</b>
        </CardFooter>
      </Card>
    </Link>
  );
}

export default PokemonCard;
