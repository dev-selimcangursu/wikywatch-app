// src/redux/slices/notificationSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getNotifications, markNotificationRead } from "../../services/notificationService";

export const fetchNotifications = createAsyncThunk(
  "notifications/fetchNotifications",
  async (_, thunkAPI) => {
    try {
      const response = await getNotifications();
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message || "Bildirimler alınamadı.");
    }
  }
);

export const markNotificationAsRead = createAsyncThunk(
  "notifications/markAsRead",
  async (id, thunkAPI) => {
    try {
      await markNotificationRead(id);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message || "Bildirim okunamadı olarak işaretlenemedi.");
    }
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
        state.error = null;
      })
      .addCase(fetchNotifications.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.filter((item) => !item.read); 
      })
      .addCase(fetchNotifications.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(markNotificationAsRead.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item._id !== action.payload);
      });
  },
});

export default notificationsSlice.reducer;
