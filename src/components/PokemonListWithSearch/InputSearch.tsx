import { Button, Input } from '@heroui/react';

import { Search } from 'lucide-react';

interface InputSearchProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit?: () => void;
}

function InputSearch({ onChange, onSubmit }: InputSearchProps) {
  return (
    <form
      className="mb-7 flex justify-center"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit?.();
      }}
    >
      <Input
        onChange={onChange}
        isClearable
        className="md:w-1/3"
        placeholder="Buscar Pokémon"
        radius="lg"
        startContent={
          <Search
            size={20}
            className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0"
          />
        }
      />
      <Button color="primary" className="ml-2" type="submit">
        Buscar
      </Button>
    </form>
  );
}

export default InputSearch;
