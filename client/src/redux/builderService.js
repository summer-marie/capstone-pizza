import axios from "axios";

const builderService = {
  builderGetMany: async () => {
    return await axios.get(`${import.meta.env.VITE_API_SERVER_URL}/builders`);
  },

  builderCreate: async (formData) => {
    return await axios.post(
      `${import.meta.env.VITE_API_SERVER_URL}/builders`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
  },

  pizzaGetOne: async (id) => {
    const response = await axios.get(
      `${import.meta.env.VITE_API_SERVER_URL}/builders/pizza-detail/${id}`
    );
    return response.data; // just the data, not the whole Axios response
  },

  builderUpdateOne: async (formData) => {
    return axios.put("/api/pizza/update", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },

  builderDeleteOneAlt: async (id) => {
    const response = await axios.delete(
      `${import.meta.env.VITE_API_SERVER_URL}/builders/${id}`
    );
    return response.data; // { success: true, id: ... }
  },
};
export default builderService;
