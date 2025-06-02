import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getFaultCategories } from "../../services/faultCategoryService";

export const fetchFaultCategories = createAsyncThunk(
  "faultCategories/fetchFaultCategories",
  async (_, thunkAPI) => {
    try {
      const response = await getFaultCategories();
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message || "Hata kategorileri alınamadı.");
    }
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
        state.error = action.payload;
      });
  },
});

export default faultCategorySlice.reducer;
