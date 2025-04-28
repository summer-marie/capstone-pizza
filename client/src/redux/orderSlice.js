import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import orderService from "./orderService"

const initialState = {
  loading: false,
  order: {
    orderNumber: "",
    date: "",
    orderDetails: {
      pizzaName: "",
      pizzaPrice: 0,
      quantity: 0,
    },
    address: {
      street: "",
      city: "",
      state: "",
      zip: "",
    },
    phone: "",
    firstName: "",
    lastName: "",
    orderTotal: 0,
    status: "",
    isArchived: false,
  },
  orders: [],
}

// Order create
export const createOrder = createAsyncThunk("order/create", async (order) => {
  console.log("redux createOrder order", order)
  const response = await orderService.createOrder(order)
  console.log(response)
  return response.data
})

// Get ALL
export const orderGetAll = createAsyncThunk("order/getAll", async () => {
  console.log("redux orderGetAll order")
  const response = await orderService.orderGetAll()
  console.log("redux orderGetAll order response", response)
  return response.data
})

// Get Only open orders 
export const orderGetOpen = createAsyncThunk("order/getOpen", async () => {
  console.log("redux orderGetOpen order")
  const response = await orderService.orderGetOpen()
  console.log("redux orderGetOpen order response", response)
  return response.data
})

// Get archived orders
export const orderGetArchived = createAsyncThunk("order/getArchived", async () => {
  console.log("redux orderGetArchived order")
  const response = await orderService.orderGetArchived()
  console.log("redux orderGetArchived order response", response)
  return response.data
})

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      // Create one
      .addCase(createOrder.pending, (state, action) => {
        console.log("orderSlice createOrder.pending", action.payload)
        state.loading = true
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        console.log("orderSlice createOrder.fulfilled", action.payload)
        state.loading = false
      })
      .addCase(createOrder.rejected, (state, action) => {
        console.log("orderSlice createOrder.rejected", action.payload)
        state.loading = false
      })

      // Get all/No Validation
      .addCase(orderGetAll.pending, (state, action) => {
        console.log("orderSlice orderGetAll.pending", action.payload)
        state.loading = true
      })
      .addCase(orderGetAll.fulfilled, (state, action) => {
        console.log("orderSlice orderGetAll.fulfilled", action.payload)
        state.loading = false
        state.orders = action.payload.orders
      })
      .addCase(orderGetAll.rejected, (state, action) => {
        console.log("orderSlice orderGetAll.rejected", action.payload)
        state.loading = false
      })
      
      // Get only open orders
      .addCase(orderGetOpen.pending, (state, action) => {
        console.log("orderSlice orderGetOpen.pending", action.payload)
        state.loading = true
      })
      .addCase(orderGetOpen.fulfilled, (state, action) => {
        console.log("orderSlice orderGetOpen.fulfilled", action.payload)
        state.loading = false
        state.orders = action.payload.orders
      })
      .addCase(orderGetOpen.rejected, (state, action) => {
        console.log("orderSlice orderGetOpen.rejected", action.payload)
        state.loading = false
      })

      // Get archived orders
      .addCase(orderGetArchived.pending, (state, action) => {
        console.log("orderSlice orderGetArchived.pending", action.payload)
        state.loading = true
      })
      .addCase(orderGetArchived.fulfilled, (state, action) => {
        console.log("orderSlice orderGetArchived.fulfilled", action.payload)
        state.loading = false
        state.orders = action.payload.orders
      })
      .addCase(orderGetArchived.rejected, (state, action) => {
        console.log("orderSlice orderGetArchived.rejected", action.payload)
        state.loading = false
      })
  },
})

export default orderSlice.reducer
