import {configureStore, combineReducers} from "@reduxjs/toolkit";
import {persistReducer, persistStore} from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";
import userSlice from "./user/userSlice";
import cardSlice from "./card/card";
import profileSlice from "./profile/profile";

const rootReducer = combineReducers({
  user: userSlice,
  card: cardSlice,
  profile: profileSlice,
});

const persistConfig = {
  key: "root",
  version: 1,
  storage: storageSession,
  whitelist: ["user", "card"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
