import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import builderService from "./builderService";

const initialState = {
  loading: false,
  builder: [
    {
      pizzaName: "",
      pizzaPrice: 0,
      base: [],
      sauce: {},
      meatTopping: [],
      veggieTopping: [],
      image: [],
    },
  ],
  builders: [],
};

// Get Many
export const builderGetMany = createAsyncThunk("builder/getMany", async () => {
  console.log("redux builderGetMany builder");
  const response = await builderService.builderGetMany();
  console.log("redux builderGetMany builder response", response);
  return response.data;
});

// Create
export const builderCreate = createAsyncThunk(
  "builder/create",
  async (builder) => {
    console.log("redux builderCreate builder", builder);
    const response = await builderService.builderCreate(builder);
    console.log(response);
    return response.data;
  }
);

// Get One
export const pizzaGetOne = createAsyncThunk("builder/getOne", async (id) => {
  console.log("redux pizzaGetOne builder", id);
  const response = await builderService.pizzaGetOne(id);
  console.log("redux pizzaGetOne builder response", response);
  return response.data;
});

// Update
export const builderUpdateOne = createAsyncThunk(
  "builder/updateOne",
  async (builder) => {
    const response = await builderService.builderUpdateOne(builder);
    return response.data;
  }
);

// Delete
export const builderDeleteOne = createAsyncThunk(
  "builder/deleteOne",
  async (id) => {
    const response = await builderService.builderDeleteOne(id);
    return { id, ...response.data };
  }
);

export const builderSlice = createSlice({
  name: "builder",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Create
      .addCase(builderCreate.pending, (state, action) => {
        console.log("builderSlice builderCreate.pending", action.payload);
        state.loading = true;
      })
      .addCase(builderCreate.fulfilled, (state, action) => {
        console.log("builderSlice builderCreate.fulfilled", action.payload);
        state.loading = false;
      })
      .addCase(builderCreate.rejected, (state, action) => {
        console.log("builderSlice builderCreate.rejected", action.payload);
        state.loading = false;
      })

      // Get Many
      .addCase(builderGetMany.pending, (state, action) => {
        console.log("builderSlice builderGetMany.pending", action.payload);
        state.loading = true;
      })
      .addCase(builderGetMany.fulfilled, (state, action) => {
        console.log("builderSlice builderGetMany.fulfilled", action.payload);
        state.loading = false;
        // Updates state
        state.builders = action.payload.builders;
      })
      .addCase(builderGetMany.rejected, (state, action) => {
        console.log("builderSlice builderGetMany.rejected", action.payload);
        state.loading = false;
      })

      // Pizza get one
      .addCase(pizzaGetOne.pending, (state, action) => {
        console.log("builderSlice pizzaGetOne.pending", action.payload);
        state.loading = true;
      })
      .addCase(pizzaGetOne.fulfilled, (state, action) => {
        console.log(
          "builderSlice pizzaGetOne.fulfilled",
          action.payload.builder
        );
        state.loading = false;
        state.builder = action.payload.builder;
      })
      .addCase(pizzaGetOne.rejected, (state, action) => {
        console.log("builderSlice pizzaGetOne.rejected", action.payload);
        state.loading = false;
      })

      // Update
      .addCase(builderUpdateOne.pending, (state, action) => {
        console.log("builderSlice builderUpdateOne.pending", action.payload);
        state.loading = true;
      })
      .addCase(builderUpdateOne.fulfilled, (state, action) => {
        console.log(
          "builderSlice builderUpdateOne.fulfilled",
          action.payload.builder
        );
        state.loading = false;
        state.builder = action.payload.builder;
        // state.builders = state.builders.map((builder) =>
        //   builder.id === action.payload.builder.id
        //     ? action.payload.builder
        //     : builder
        // )
      })
      .addCase(builderUpdateOne.rejected, (state, action) => {
        console.log("builderSlice builderUpdateOne.rejected", action.payload);
        state.loading = false;
      })

      // Delete
      .addCase(builderDeleteOne.pending, (state, action) => {
        console.log("builderSlice builderDeleteOne.pending", action.payload);
        state.loading = true;
      })
      .addCase(builderDeleteOne.fulfilled, (state, action) => {
        state.builders = state.builders.filter(
          (builder) => builder._id !== action.payload.id
        );
        state.loading = false;
      })
      .addCase(builderDeleteOne.rejected, (state, action) => {
        console.log("builderSlice builderDeleteOne.rejected", action.payload);
        state.loading = false;
      });
  },
});

export default builderSlice.reducer;
