import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  post: null,
  apiError: null,
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setPost: (state, action) => {
      state.post = action.payload;
    },
    setApiError: (state, action) => {
      state.apiError = action.payload;
    },
  },
});

export const {setPost, setApiError} = postSlice.actions;

export default postSlice.reducer;
