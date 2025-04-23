import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import builderService from "./builderService"

const initialState = {
  loading: false,
  builder: [
    {
      pizzaName: "",
      pizzaPrice: 0,
      base: [],
      sauce: {},
      meatToppings: [],
      veggieToppings: [],
      image: [],
    },
  ],
  builders: [],
}

// Get Many
export const builderGetMany = createAsyncThunk("builder/getMany", async () => {
  console.log("redux builderGetMany builder")
  const response = await builderService.builderGetMany()
  console.log("redux builderGetMany builder response", response)

  return response.data
})

// Create
export const builderCreate = createAsyncThunk(
  "builder/create",
  async (builder) => {
    console.log("redux builderCreate builder", builder)
    const response = await builderService.builderCreate(builder)
    console.log(response)
    return response.data
  }
)

export const builderSlice = createSlice({
  name: "builder",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Create
      .addCase(builderCreate.pending, (state, action) => {
        console.log("builderSlice builderCreate.pending", action.payload)
        state.loading = true
      })
      .addCase(builderCreate.fulfilled, (state, action) => {
        console.log("builderSlice builderCreate.fulfilled", action.payload)
        state.loading = false
      })
      .addCase(builderCreate.rejected, (state, action) => {
        console.log("builderSlice builderCreate.rejected", action.payload)
        state.loading = false
      })

      // Get Many
      .addCase(builderGetMany.pending, (state, action) => {
        console.log("builderSlice builderGetMany.pending", action.payload)
        state.loading = true
      })
      .addCase(builderGetMany.fulfilled, (state, action) => {
        console.log("builderSlice builderGetMany.fulfilled", action.payload)
        state.loading = false
        // Updates state
        state.builders = action.payload.builders
      })
      .addCase(builderGetMany.rejected, (state, action) => {
        console.log("builderSlice builderGetMany.rejected", action.payload)
        state.loading = false
      })
  },
})

export default builderSlice.reducer
