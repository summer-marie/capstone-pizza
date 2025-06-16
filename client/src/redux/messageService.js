import axios from "axios";

const messageService = {
  // Create a new message
  sendMessage: async (messageData) => {
    return await axios.post(
      `${import.meta.env.VITE_API_SERVER_URL}/messages`,
      messageData
    );
  },

  // Get all messages
  getMessages: async () => {
    return await axios.get(`${import.meta.env.VITE_API_SERVER_URL}/messages`);
  },

  // Update message read status
  updateMessageRead: async (id) => {
    return await axios.put(
      `${import.meta.env.VITE_API_SERVER_URL}/messages/${id}`
    );
  },
};

export default messageService;
