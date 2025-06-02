import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchOrderStatus = createAsyncThunk(
  "order/fetchOrderStatus",
  async (orderNumber, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://imfexim.loopsoft.app/admin/order/status",
        { orderNumber }
      );
      return response.data;
    } catch (error) {
      console.log("Hata Detayı:", error.response?.data || error.message);
      return rejectWithValue(
        error.response?.data?.message || error.message || "Bilinmeyen bir hata oluştu."
      );
    }
  }
);


const orderStatusSlice = createSlice({
  name: "order",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    clearOrder: (state) => {
      state.data = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrderStatus.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.data = null;
      })
      .addCase(fetchOrderStatus.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchOrderStatus.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearOrder } = orderStatusSlice.actions;
export default orderStatusSlice.reducer;
