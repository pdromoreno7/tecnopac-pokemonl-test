import { Image } from '@heroui/image';

function LogoPokemon() {
  return (
    <div>
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1024px-International_Pok%C3%A9mon_logo.svg.png"
        alt="Pokemon Logo"
        className="w-[300px] object-contain"
        width={400}
      />
    </div>
  );
}

export default LogoPokemon;
