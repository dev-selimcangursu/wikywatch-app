import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// API'den fault categories'i çek
export const fetchFaultCategories = createAsyncThunk(
  "faultCategories/fetchFaultCategories",
  async () => {
    const response = await axios.get(
      "http://192.168.36.147:3000/api/fault-categories"
    );
    return response.data;
  }
);

const faultCategorySlice = createSlice({
  name: "faultCategories",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFaultCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFaultCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.data.map((item) => ({
          label: item.name,
          value: item.fault_id,
        }));
      })
      .addCase(fetchFaultCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default faultCategorySlice.reducer;
