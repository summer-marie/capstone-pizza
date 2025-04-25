import axios from "axios"
import ingredientGetOne from "../../../server/ingredients/ingredientsGetOne";

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

  ingredientGetOne: async (builder) => {
    return await axios.get(
      `${import.meta.env.VITE_NODE_SERVER_URL}/ingredient/${builder.id}`
    );
  },


  ingredientUpdateOne: async (ingredient) => {
    return await axios.put(
      `${import.meta.env.VITE_API_SERVER_URL}/ingredients/${ingredient.id}`,
      ingredient
    )
  },
}

export default ingredientService
