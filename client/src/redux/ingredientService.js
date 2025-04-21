import axios from "axios"

const ingredientService = {
  // Orders
  createIngredient: async (ingredient) => {
    return await axios.post(
      `${import.meta.env.VITE_API_SERVER_URL}/ingredients`,
      ingredient
    )
  },
  ingredientGetAll: async () => {
    return await axios.get(`${import.meta.env.VITE_API_SERVER_URL}/ingredients`)
  },
}

export default ingredientService
