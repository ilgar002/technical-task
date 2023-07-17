import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const getUsers = createAsyncThunk("user/fetchUsers", async (all) => {
  try {
    const { data } = await axios.get("/data/initData.json");
    return data.slice(0, all ? data.length : 3);
  } catch (error) {
    throw error;
  }
});
