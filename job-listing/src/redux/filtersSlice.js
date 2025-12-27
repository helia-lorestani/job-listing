import { createSlice } from "@reduxjs/toolkit";
const filtersSlice = createSlice({
  name: "filters",
  initialState: [],
  reducers: {
    addFilter: (state, action) => {
      if (!state.includes(action.payload)) {
        state.push(action.payload);
      }
    },
    removeFilter: (state, action) => {
      return state.filter((skill) => skill !== action.payload);
    },
    clearFilters: () => [],
  },
});

export const { addFilter, removeFilter, clearFilters } = filtersSlice.actions;
export default filtersSlice.reducer;
