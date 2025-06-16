import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const sendMessage = createAsyncThunk(
  "message/sendMessage",
  async (messageData) => {
    const response = await axios.post(
      `${import.meta.env.VITE_API_SERVER_URL}/messages/create`,
      messageData
    );
    return response.data;
  }
);

export const getMessages = createAsyncThunk(
  "message/getMessages",
  async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_API_SERVER_URL}/messages/all`
    );
    return response.data;
  }
);

const messageSlice = createSlice({
  name: "message",
  initialState: {
    messages: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(sendMessage.pending, (state) => {
        state.loading = true;
      })
      .addCase(sendMessage.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(sendMessage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getMessages.pending, (state) => {
        state.loading = true;
      })
      .addCase(getMessages.fulfilled, (state, action) => {
        state.loading = false;
        state.messages = action.payload.messages;
      })
      .addCase(getMessages.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default messageSlice.reducer;