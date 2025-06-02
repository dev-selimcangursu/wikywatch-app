// store/slices/salesPointsSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// API'den satış noktalarını çekme
export const fetchSalesPoints = createAsyncThunk(
  "salesPoints/fetchSalesPoints",
  async () => {
    const response = await axios.get("http://192.168.75.147:3000/api/sales-points"); 
    return response.data;
  }
);

const salesPointsSlice = createSlice({
  name: "salesPoints",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSalesPoints.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSalesPoints.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchSalesPoints.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default salesPointsSlice.reducer;
