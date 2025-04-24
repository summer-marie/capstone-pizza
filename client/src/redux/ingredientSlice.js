import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import ingredientService from "./ingredientService"

const initialState = {
  loading: false,
  ingredient: {
    name: "",
    description: "",
    itemType: "",
    price: 0,
  },
  ingredients: [],
}

// Order create
export const createIngredient = createAsyncThunk(
  "ingredient/create",
  async (ingredient) => {
    console.log("redux createIngredient ingredient", ingredient)
    const response = await ingredientService.createIngredient(ingredient)
    console.log(response)
    return response.data
  }
)

// Get ALL
export const ingredientGetAll = createAsyncThunk(
  "ingredient/getAll",
  async () => {
    console.log("redux ingredientGetAll ingredient")
    const response = await ingredientService.ingredientGetAll()
    console.log("redux ingredientGetAll ingredient response", response)
    return response.data
  }
)

// Get One
export const ingredientGetOne = createAsyncThunk(
  "ingredient/getOne",
  async (id) => {
    console.log("redux ingredientGetOne order", id)
    const response = await orderService.ingredientGetOne(id)
    console.log("redux ingredientGetOne order response", response)
    return response.data
  }
)

// Update One
export const ingredientUpdateOne = createAsyncThunk(
  "ingredient/updateOne",
  async (ingredient) => {
    console.log("redux ingredientUpdateOne ingredient", ingredient)
    const response = await ingredientService.ingredientUpdateOne(ingredient)
    console.log("redux ingredientUpdateOne ingredient response", response)
    return response.data
  }
)

export const ingredientSlice = createSlice({
  name: "ingredient",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      // Orders create one
      .addCase(createIngredient.pending, (state, action) => {
        console.log("ingredientSlice createIngredient.pending", action.payload)
        state.loading = true
      })
      .addCase(createIngredient.fulfilled, (state, action) => {
        console.log(
          "ingredientSlice createIngredient.fulfilled",
          action.payload
        )
        state.loading = false
      })
      .addCase(createIngredient.rejected, (state, action) => {
        console.log("ingredientSlice createIngredient.rejected", action.payload)
        state.loading = false
      })

      // Orders get all/No Validation
      .addCase(ingredientGetAll.pending, (state, action) => {
        console.log("ingredientSlice ingredientGetAll.pending", action.payload)
        state.loading = true
      })
      .addCase(ingredientGetAll.fulfilled, (state, action) => {
        console.log(
          "ingredientSlice ingredientGetAll.fulfilled",
          action.payload
        )
        state.loading = false
        state.ingredients = action.payload.ingredients
      })
      .addCase(ingredientGetAll.rejected, (state, action) => {
        console.log("ingredientSlice ingredientGetAll.rejected", action.payload)
        state.loading = false
      })

      // Get One
      .addCase(ingredientGetOne.pending, (state, action) => {
        console.log("ingredientSlice ingredientGetOne.pending", action.payload)
        state.loading = true
      })
      .addCase(ingredientGetOne.fulfilled, (state, action) => {
        console.log(
          "ingredientSlice ingredientGetOne.fulfilled",
          action.payload.ingredient
        )
        state.loading = false
        // Updates state
        state.ingredient = action.payload.ingredient
      })
      .addCase(ingredientGetOne.rejected, (state, action) => {
        console.log("ingredientSlice ingredientGetOne.rejected", action.payload)
        state.loading = false
      })

      // Update One
      .addCase(ingredientUpdateOne.pending, (state, action) => {
        console.log(
          "ingredientSlice ingredientUpdateOne.pending",
          action.payload
        )
        state.loading = true
      })
      .addCase(ingredientUpdateOne.fulfilled, (state, action) => {
        console.log(
          "ingredientSlice ingredientUpdateOne.fulfilled",
          action.payload
        )
        state.loading = false
        state.ingredients = state.ingredients.map(ingredient => ingredient.id === action.payload.ingredient.id ? action.payload.ingredient : ingredient)
        // Find the updated ingredient in the existing ingredient list and replace it with the new data.
        // const indexOfUpdatedIngredient = state.ingredients.findIndex(
        //   (ingredient) =>
        //     ingredient._id === action.payload.updatedIngredient._id
        // )
        // state.ingredients[indexOfUpdatedIngredient] =
        //   action.payload.updatedIngredient
      })
      .addCase(ingredientUpdateOne.rejected, (state, action) => {
        console.log(
          "ingredientSlice ingredientUpdateOne.rejected",
          action.payload
        )
        state.loading = false
      })
  },
})

export default ingredientSlice.reducer
