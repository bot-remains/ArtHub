import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  comment: null,
  apiError: null,
};

export const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    setComment: (state, action) => {
      state.comment = action.payload;
    },
    setApiError: (state, action) => {
      state.apiError = action.payload;
    },
  },
});

export const {setComment, setApiError} = commentSlice.actions;

export default commentSlice.reducer;
