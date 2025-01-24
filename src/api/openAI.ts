'use server';

import { MODEL_NAME } from '@/openAi';
import { descriptionPokemonSchema, descriptionPokemonSchemaResponse } from '@/schemas/descriptionPokemon';
import { openai } from '@ai-sdk/openai';
import { generateObject } from 'ai';

export async function getDescriptionPokemon(name: string): Promise<descriptionPokemonSchemaResponse> {
  try {
    const { object } = await generateObject({
      // model: google('models/gemini-1.5-pro'),
      model: openai(MODEL_NAME),
      schema: descriptionPokemonSchema,
      prompt: `Describe en español a este pokemon ${name}`,
    });
    return object;
  } catch (error) {
    throw new Error(`Error inesperado en getObjectByModelAi: ${error}`);
  }
}
