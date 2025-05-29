import axios from "axios";

const builderService = {
  builderGetMany: async () => {
    return await axios.get(`${import.meta.env.VITE_API_SERVER_URL}/builders`);
  },

  builderCreate: async (builder) => {
    return await axios.post(
      `${import.meta.env.VITE_API_SERVER_URL}/builders`,
      builder
    );
  },

  pizzaGetOne: async (id) => {
    return await axios.get(
      `${import.meta.env.VITE_API_SERVER_URL}/builders/pizza-detail/${id}`
    );
  },

  builderUpdateOne: async (builder) => {
    return await axios.put(
      `${import.meta.env.VITE_API_SERVER_URL}/builders/${builder.id}`,
      builder
    );
  },

  builderDeleteOne: async (id) => {
    return await axios.delete(
      `${import.meta.env.VITE_API_SERVER_URL}/builders/${id}`
    );
  },
};
export default builderService;
