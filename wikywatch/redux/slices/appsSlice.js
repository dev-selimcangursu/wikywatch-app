import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchApps = createAsyncThunk("apps/fetchApps", async () => {
  const response = await axios.get("http://192.168.36.147:3000/api/mobile-apps");
  return response.data;
});

const appsSlice = createSlice({
  name: "apps",
  initialState: {
    apps: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchApps.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchApps.fulfilled, (state, action) => {
        state.loading = false;
        state.apps = action.payload;
      })
      .addCase(fetchApps.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default appsSlice.reducer;
