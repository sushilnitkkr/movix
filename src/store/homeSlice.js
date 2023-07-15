import { createSlice } from "@reduxjs/toolkit";

export const homeSlice = createSlice({
  name: 'homeS',
  initialState: {
    url: {},
    geners: {},
  },
  reducers: {
    getApiConfiguration: (state, action) => {
      state.url = action.payload;
    },
    getGenres: (state, action) => {
      state.geners = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getApiConfiguration, getGenres } = homeSlice.actions;

export default homeSlice.reducer;
