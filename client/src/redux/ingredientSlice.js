import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import ingredientService from "./ingredientService"

const initialState = {
  loading: false,
  ingredient: {
    name: "",
    description: "",
    itemType: "",
    price: 0.0,
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
  },
})

export default ingredientSlice.reducer
