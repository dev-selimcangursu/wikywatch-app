import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBoxContent = createAsyncThunk(
  "boxContent/fetchBoxContent",
  async () => {
    const response = await axios.get(
      "http://192.168.36.147:3000/api/box-content"
    );
    return response.data.data;
  }
);

const boxContentSlice = createSlice({
  name: "boxContent",
  initialState: {
    items: [],
    selected: [],
    status: "idle",
    error: null,
  },
  reducers: {
    toggleItem: (state, action) => {
      const item = action.payload;
      if (state.selected.includes(item)) {
        state.selected = state.selected.filter((i) => i !== item);
      } else {
        state.selected.push(item);
      }
    },
    clearSelected: (state) => {
      state.selected = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBoxContent.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBoxContent.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchBoxContent.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { toggleItem, clearSelected } = boxContentSlice.actions;
export default boxContentSlice.reducer;
