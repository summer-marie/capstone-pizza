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

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      // Orders create one
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

      // Orders get all/No Validation
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
  },
})

export default orderSlice.reducer