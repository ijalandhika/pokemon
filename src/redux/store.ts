import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import {
  reducer as apiReducer,
  reducerPath as apiReducerPath,
  middleware as apiMiddleware,
} from "@/redux/services/pokemonApi";
import poketMonsterReducer from "./features/savePokemon";

export const store = configureStore({
  reducer: {
    poketMonsterReducer,
    [apiReducerPath]: apiReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    }).concat(apiMiddleware);
  },
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
