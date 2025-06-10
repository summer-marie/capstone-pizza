import axios from "axios";

const authService = {
  login: async ({ email, password }) => {
    console.log("NEW authService login", email, password);
    const response = await axios.post(
      `${import.meta.env.VITE_API_SERVER_URL}/auth/login`,
      { email, password }
    );
    console.log(" NEW response", response.data);
    return response.data;
  },

  status: async () => {
    const token = JSON.parse(localStorage.getItem("token"));
    console.log("NEW authService status token", token);
    const response = await axios.get(
      `${import.meta.env.VITE_API_SERVER_URL}/auth/status`,
      {},
      {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log("NEW response", response.data);
    return response.data;
  },

  logout: async () => {
    // Get token from localStorage (parse if stored as JSON)
    const token = JSON.parse(localStorage.getItem("token"));
    console.log("authService logout token", token);

    // Make logout request
    const response = await axios.post(
      `${import.meta.env.VITE_API_SERVER_URL}/auth/logout/`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      }
    );

    // Remove token from localStorage after successful logout
    localStorage.removeItem("token");
    localStorage.removeItem("userOn");

    return response.data;
  },
};

// export const status = async (token) => {
//     console.log("authService status token", token)
//     const response = await axios.get(
//         `${import.meta.env.VITE_API_SERVER_URL}/auth/status`,
//         { withCredentials: true, headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` }}
//     )
//     console.log("response", response.data)
//     return response.data
// }

export default authService;
