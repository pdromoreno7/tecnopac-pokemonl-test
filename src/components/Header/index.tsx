import LogoPokemon from '@/assets/LogoPokemon';
import Link from 'next/link';

function Header() {
  return (
    <header className="flex justify-center w-full p-9">
      <Link href="/">
        <LogoPokemon />
      </Link>
    </header>
  );
}

export default Header;
