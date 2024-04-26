import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  profile: null,
  apiError: null,
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfile: (state, action) => {
      state.profile = action.payload;
    },
    setApiError: (state, action) => {
      state.apiError = action.payload;
    },
  },
});

export const {setProfile, setApiError} = profileSlice.actions;

export default profileSlice.reducer;
