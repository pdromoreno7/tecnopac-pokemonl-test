import axios from "axios";

export const POKE_API_URL = "https://pokeapi.co/api/v2";

export const apiClient = axios.create({
  baseURL: POKE_API_URL,
});
