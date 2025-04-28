import axios from "axios"

const orderService = {
  // Orders
  createOrder: async (order) => {
    return await axios.post(
      `${import.meta.env.VITE_API_SERVER_URL}/orders`,
      order
    )
  },

  // Get all Orders
  orderGetAll: async () => {
    return await axios.get(`${import.meta.env.VITE_API_SERVER_URL}/orders`)
  },

  // Get only open orders
  orderGetOpen: async () => {
    return await axios.get(`${import.meta.env.VITE_API_SERVER_URL}/orders/open`)
  },

  // Get only archived orders
  orderGetArchived: async () => {
    return await axios.get(
      `${import.meta.env.VITE_API_SERVER_URL}/orders/archived`
    )
  },

  // Update order status
  orderUpdateStatus: async (order) => {
    const { id, status } = order
    return await axios.put(
      `${import.meta.env.VITE_API_SERVER_URL}/orders/open/${id}`,
      { status: status }
    )
  },

  // orderUpdateStatus: async (id, status) => {
  //   return await axios.get(`${import.meta.env.VITE_API_SERVER_URL}/orders/open/${id}`, {status});
  // },

  // orderGetOne: async (id) => {
  //   return await axios.get(
  //     `${import.meta.env.VITE_API_SERVER_URL}/orders/${id}`
  //   );
  // },
  // orderUpdate: async ( {id, orderForm }) => {
  //   return await axios.put(
  //     `${import.meta.env.VITE_API_SERVER_URL}/orders/order-detail/${id}`,
  //     orderForm
  //   );
  // },
}

export default orderService
