import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAppsAPI } from "../../services/appService";

export const fetchApps = createAsyncThunk(
  "apps/fetchApps",
  async (_, thunkAPI) => {
    try {
      return await fetchAppsAPI(); // direkt data dönüyor
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const appsSlice = createSlice({
  name: "apps",
  initialState: {
    apps: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchApps.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchApps.fulfilled, (state, action) => {
        state.loading = false;
        state.apps = action.payload;  // burada data doğrudan payload oluyor
      })
      .addCase(fetchApps.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default appsSlice.reducer;
