interface DreamWorld {
  front_default: string;
  front_female: string;
}

interface Home {
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
}

interface OfficialArtwork {
  front_default: string;
  front_shiny: string;
}

interface Showdown {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
}

interface Other {
  dream_world: DreamWorld;
  home: Home;
  "official-artwork": OfficialArtwork;
  showdown: Showdown;
}

interface Sprites {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
  other: Other;
  versions: Record<string, any>; // Puedes definir una interfaz más específica si conoces la estructura
}

export interface PokemonDetails {
  abilities: {
    ability: {
      name: string;
      url: string;
    };
    is_hidden: boolean;
    slot: number;
  };
  base_experience: number;
  cries: {
    latest: string;
    legacy: string;
  };
  forms: {
    name: string;
    url: string;
  };
  game_indices: {
    game_index: number;
    version: {
      name: string;
      url: string;
    };
  };
  height: number;
  held_items: [];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: {
    move: {
      name: string;
      url: string;
    };
    version_group_details: {
      level_learned_at: number;
      move_learn_method: {
        name: string;
        url: string;
      };
      version_group: {
        name: string;
        url: string;
      };
    };
  };
  name: string;
  order: number;
  species: {
    name: string;
    url: string;
  };
  sprites: Sprites;
  stats?: any;
  types?: any;
  weight: number;
}

// export interface PokemonType {
//   name: string;
//   url: string;
// }
