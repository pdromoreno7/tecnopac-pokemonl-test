import { apiClient } from "./axiosClient";

export async function getPokemons() {
  try {
    const response = await apiClient.get("/pokemon");
    return response.data;
  } catch (error) {
    console.error("Error fetching Pokemon:", error);
    throw error;
  }
}
