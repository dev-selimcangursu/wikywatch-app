import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getFaqs } from "../../services/faqService";

export const fetchFaqs = createAsyncThunk(
  "faq/fetchFaqs",
  async (_, thunkAPI) => {
    try {
      const response = await getFaqs();
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message || "Veriler alınamadı.");
    }
  }
);

const faqSlice = createSlice({
  name: "faq",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFaqs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFaqs.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchFaqs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default faqSlice.reducer;
