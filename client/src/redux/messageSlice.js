import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import messageService from "./messageService";

const initialState = {
  loading: false,
  messages: [],
  error: null,
};

// Send message
export const sendMessage = createAsyncThunk(
  "message/sendMessage",
  async (messageData) => {
    console.log("redux sendMessage", messageData);
    const response = await messageService.sendMessage(messageData);
    console.log(response);
    return response.data;
  }
);

// Get all messages
export const getMessages = createAsyncThunk("message/getAll", async () => {
  console.log("redux getMessages");
  const response = await messageService.getMessages();
  console.log("redux getMessages response", response);
  return response.data;
});

// Update message read status
export const updateMessageRead = createAsyncThunk(
  "message/updateRead",
  async (id) => {
    console.log("redux updateMessageRead id", id);
    const response = await messageService.updateMessageRead(id);
    console.log(response);
    return response.data;
  }
);

export const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Send message
      .addCase(sendMessage.pending, (state, action) => {
        console.log("messageSlice sendMessage.pending", action.payload);
        state.loading = true;
      })
      .addCase(sendMessage.fulfilled, (state, action) => {
        console.log("messageSlice sendMessage.fulfilled", action.payload);
        state.loading = false;
      })
      .addCase(sendMessage.rejected, (state, action) => {
        console.log("messageSlice sendMessage.rejected", action.payload);
        state.loading = false;
        state.error = action.error.message;
      })

      // Get all messages
      .addCase(getMessages.pending, (state, action) => {
        console.log("messageSlice getMessages.pending", action.payload);
        state.loading = true;
      })
      .addCase(getMessages.fulfilled, (state, action) => {
        console.log("messageSlice getMessages.fulfilled", action.payload);
        state.loading = false;
        state.messages = action.payload.messages;
      })
      .addCase(getMessages.rejected, (state, action) => {
        console.log("messageSlice getMessages.rejected", action.payload);
        state.loading = false;
        state.error = action.error.message;
      })

      // Update message read status
      .addCase(updateMessageRead.pending, (state, action) => {
        console.log("messageSlice updateMessageRead.pending", action.payload);
        state.loading = true;
      })
      .addCase(updateMessageRead.fulfilled, (state, action) => {
        console.log("messageSlice updateMessageRead.fulfilled", action.payload);
        state.loading = false;
        state.messages = state.messages.map((message) =>
          message._id === action.payload.message._id
            ? action.payload.message
            : message
        );
      })
      .addCase(updateMessageRead.rejected, (state, action) => {
        console.log("messageSlice updateMessageRead.rejected", action.payload);
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default messageSlice.reducer;
