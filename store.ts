import { configureStore } from "@reduxjs/toolkit";
import nutritionReducer from "./features/nutritionSlice";

export const store = configureStore({
      reducer: {
            nutrition: nutritionReducer,
      },
});

export type RootState = ReturnType<typeof store.getState>;
