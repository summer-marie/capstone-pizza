import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

const initialState = {
  authUser: {},
  token: {}
};

export const login = createAsyncThunk("auth/authUser", async (loginForm) => {
  console.log("authUser THUNK");
  const response = await authService.login(loginForm);
  console.log("authUser THUNK response", response.user);
  // const tempAuthUser = response.data.user
  return response;
});

export const status = createAsyncThunk("auth/authStatus", async () => {
  console.log("STATUS authUser THUNK");
  const response = await authService.status()
  console.log("STATUS authUser THUNK response", response);
  return response.data;
})

export const logout = createAsyncThunk("auth/logout", async () => {
  console.log("logout authUser THUNK");
  const response = await authService.logout()
  console.log("logout authUser THUNK response", response);
  return response.data;
})

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // auth login
      .addCase(login.pending, (state, action) => {
        console.log("pending authSlice action.payload", action.payload);
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        console.log("authSlice action.payload", action.payload);
        state.loading = false;
        state.authUser = action.payload.user;
        state.token = action.payload.token
        localStorage.setItem("userOn", JSON.stringify(action.payload.user));
        localStorage.setItem("token", JSON.stringify(action.payload.token));
      })
      .addCase(login.rejected, (state, action) => {
        console.log("rejected authSlice action.payload", action.payload);
        state.loading = false;
      })
      // auth status
      .addCase(status.pending, (state, action) => {
        console.log("pending authSlice action.payload", action.payload);
        state.loading = true;
      })
      .addCase(status.fulfilled, (state, action) => {
        console.log("authSlice action.payload", action.payload);
        state.loading = false;
        // state.authUser = action.payload.;
      })
      .addCase(status.rejected, (state, action) => {
        console.log("rejected authSlice action.payload", action.payload);
        state.loading = false;
      })
      // logout but what does this really do
      .addCase(logout.pending, (state, action) => {
        console.log("LOGOUT pending authSlice action.payload", action.payload);
        state.loading = true;
      })
      .addCase(logout.fulfilled, (state, action) => {
        console.log("LOGOUT authSlice action.payload", action.payload);
        state.loading = false;
        // state.authUser = action.payload.;
      })
      .addCase(logout.rejected, (state, action) => {
        console.log("LOGOUT rejected authSlice action.payload", action.payload);
        state.loading = false;
      })
  },
});

export default authSlice.reducer