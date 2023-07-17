import { createSlice } from "@reduxjs/toolkit";
import { getUsers } from "../actions/user";
const initialState = {
  users: [],
  loading: false,
  errors: null,
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUsers.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.users = payload;
      })
      .addCase(getUsers.rejected, (state, { error }) => {
        state.loading = false;
        state.errors = error.message;
      });
  },
});

export default userSlice.reducer;
