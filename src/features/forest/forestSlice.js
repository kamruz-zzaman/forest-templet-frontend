import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const forestSlice = createSlice({
  name: "forset",
  initialState,
  reducers: {
    setdata: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setdata } = forestSlice.actions;

export default forestSlice.reducer;
