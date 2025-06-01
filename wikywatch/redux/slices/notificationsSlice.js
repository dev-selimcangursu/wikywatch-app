import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Bildirimleri getir
export const fetchNotifications = createAsyncThunk(
  "notifications/fetchNotifications",
  async () => {
    const response = await axios.get("http://192.168.36.147:3000/api/notification");
    return response.data;
  }
);

// Bildirimi okundu olarak işaretle
export const markNotificationAsRead = createAsyncThunk(
  "notifications/markAsRead",
  async (id, thunkAPI) => {
    await axios.patch(`http://192.168.36.147:3000/api/notification/${id}/read`);
    return id;
  }
);

const notificationsSlice = createSlice({
  name: "notifications",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNotifications.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchNotifications.fulfilled, (state, action) => {
        state.loading = false;
        // sadece okunmamışları listele
        state.items = action.payload.filter((item) => !item.read);
      })
      .addCase(fetchNotifications.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(markNotificationAsRead.fulfilled, (state, action) => {
        // Okundu olarak işaretlenen bildirimi listeden çıkar
        state.items = state.items.filter((item) => item._id !== action.payload);
      });
  },
});

export default notificationsSlice.reducer;
