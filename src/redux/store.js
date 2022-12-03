import { configureStore } from "@reduxjs/toolkit";
import { postApi } from "./posts";
import todoReducer from "./reducer";
import storage from "redux-persist/lib/storage";
import { setupListeners } from "@reduxjs/toolkit/query";

import logger from "redux-logger";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
const middleware = (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }).concat(logger, postApi.middleware);

const persistConfig = {
  key: "posts",
  storage,
  blacklist: ["filter"],
};
const persistedReducer = persistReducer(persistConfig, todoReducer);


const store = configureStore({
  reducer: {
    posts: persistedReducer,
    [postApi.reducerPath]: postApi.reducer,
  
  },
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

const persistor = persistStore(store);
export { store, persistor };
setupListeners(store.dispatch);