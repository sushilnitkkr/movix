import { createSlice } from "@reduxjs/toolkit";

export const homeSlice = createSlice({
  name: 'homeS',
  initialState: {
    url: {test:"test data coming by using redux"},
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
