import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchSalesPointsAPI } from '../../services/salesPointsService';

export const fetchSalesPoints = createAsyncThunk(
  'salesPoints/fetchSalesPoints',
  async (_, thunkAPI) => {
    try {
      return await fetchSalesPointsAPI();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const salesPointsSlice = createSlice({
  name: 'salesPoints',
  initialState: {
    data: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSalesPoints.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSalesPoints.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchSalesPoints.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default salesPointsSlice.reducer;
