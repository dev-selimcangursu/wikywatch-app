import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchServiceStatusAPI } from '../../services/serviceStatusService';

export const fetchServiceStatus = createAsyncThunk(
  'serviceStatus/fetch',
  async (serviceNumber, { rejectWithValue }) => {
    try {
      return await fetchServiceStatusAPI(serviceNumber);
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || 'Bilinmeyen bir hata oluştu.'
      );
    }
  }
);

const serviceStatusSlice = createSlice({
  name: 'serviceStatus',
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    clearServiceStatus: (state) => {
      state.data = null;
      state.error = null;
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchServiceStatus.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchServiceStatus.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchServiceStatus.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearServiceStatus } = serviceStatusSlice.actions;
export default serviceStatusSlice.reducer;

