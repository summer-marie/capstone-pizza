import axios from "axios"

const builderService = {
  builderGetMany: async () => {
    return await axios.get(`${import.meta.env.VITE_API_SERVER_URL}/builders`)
  },
  builderCreate: async (builder) => {
    return await axios.post(
      `${import.meta.env.VITE_API_SERVER_URL}/builders`,
      builder
    )
  },
}

export default builderService
