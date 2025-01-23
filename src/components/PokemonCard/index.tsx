import { Card, CardHeader, CardBody } from "@heroui/card";
import Link from "next/link";

interface PokemonCardProps {
  name: string;
}
function PokemonCard({ name }: PokemonCardProps) {
  return (
    <Link href={`/${name}`}>
      <Card>
        <CardBody>
          <CardHeader>
            <h2>{name}</h2>
          </CardHeader>
        </CardBody>
      </Card>
    </Link>
  );
}

export default PokemonCard;
