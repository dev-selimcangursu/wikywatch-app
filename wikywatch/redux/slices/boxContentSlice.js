import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getBoxContent } from "../../services/boxContentService";

export const fetchBoxContent = createAsyncThunk(
  "boxContent/fetchBoxContent",
  async () => {
    const response = await getBoxContent();
    return response.data; 
  }
);

const boxContentSlice = createSlice({
  name: "boxContent",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBoxContent.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBoxContent.fulfilled, (state, action) => {
        state.items = action.payload;  
        state.status = "succeeded";
      })
      .addCase(fetchBoxContent.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default boxContentSlice.reducer;
