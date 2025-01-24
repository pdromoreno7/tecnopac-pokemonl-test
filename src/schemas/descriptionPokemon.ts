import { z } from 'zod';
export const descriptionPokemonSchema = z.object({
  recipe: z.object({
    pokemonDescription: z.string(),
  }),
});

export type descriptionPokemonSchemaResponse = z.infer<typeof descriptionPokemonSchema>;
