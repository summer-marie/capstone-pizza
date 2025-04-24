import axios from "axios";

const orderService = {
  // Orders
  createOrder: async (order) => {
    return await axios.post(
      `${import.meta.env.VITE_API_SERVER_URL}/orders`,
      order
    );
  },

  
  // orderGetMany: async (email) => {
  //   return await axios.get(
  //     `${import.meta.env.VITE_API_SERVER_URL}/orders/${email}`
  //   );
  // },


  orderGetAll: async () => {
    return await axios.get(`${import.meta.env.VITE_API_SERVER_URL}/orders`);
  },


  orderGetOne: async (id) => {
    return await axios.get(
      `${import.meta.env.VITE_API_SERVER_URL}/orders/order-detail/${id}`
    );
  },
  // orderUpdate: async ( {id, orderForm }) => {
  //   return await axios.put(
  //     `${import.meta.env.VITE_API_SERVER_URL}/orders/order-detail/${id}`,
  //     orderForm
  //   );
  // },
  
};

export default orderService;