import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { orderApi } from "../../services/api";

export const submitResetForm = createAsyncThunk(
  "resetForm/submitResetForm",
  async ({ formData, file }, { rejectWithValue }) => {
    try {
      const data = new FormData();
      data.append("fullName", formData.fullName);
      data.append("phone", formData.phone);
      data.append("email", formData.email);
      data.append("imei", formData.imei);
      data.append("reason", formData.reason || "");
      data.append("invoice", {
        uri: file.uri,
        name: file.name,
        type: file.type,
      });

      const response = await orderApi.post("/reset-form", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return response.data;
    } catch (err) {
      if (err.response && err.response.data) {
        return rejectWithValue(err.response.data);
      }
      return rejectWithValue({ message: err.message });
    }
  }
);

const resetFormSlice = createSlice({
  name: "resetForm",
  initialState: {
    loading: false,
    success: false,
    error: null,
  },
  reducers: {
    resetStatus: (state) => {
      state.success = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitResetForm.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(submitResetForm.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(submitResetForm.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload || { message: "İşlem başarısız." };
      });
  },
});

export const { resetStatus } = resetFormSlice.actions;
export default resetFormSlice.reducer;
