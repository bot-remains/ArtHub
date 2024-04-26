import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  card: null,
  apiError: null,
};

export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    setCard: (state, action) => {
      state.card = action.payload;
    },
    setApiError: (state, action) => {
      state.apiError = action.payload;
    },
  },
});

export const {setCard, setApiError} = cardSlice.actions;

export default cardSlice.reducer;
