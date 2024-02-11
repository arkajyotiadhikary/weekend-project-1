import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface NutriState {
      calories: number;
      carbohydrates_total_g: number;
      cholesterol_mg: number;
      fat_saturated_g: number;
      fat_total_g: number;
      fiber_g: number;
      name: string;
      potassium_mg: number;
      protein_g: number;
      serving_size_g: number;
      sodium_mg: number;
      sugar_g: number;
}

const initialState: NutriState = {
      calories: 0,
      carbohydrates_total_g: 0,
      cholesterol_mg: 0,
      fat_saturated_g: 0,
      fat_total_g: 0,
      fiber_g: 0,
      name: "",
      potassium_mg: 0,
      protein_g: 0,
      serving_size_g: 0,
      sodium_mg: 0,
      sugar_g: 0,
};

const nutritionSlice = createSlice({
      name: "nutrition",
      initialState,
      reducers: {
            setValue: (state, action: PayloadAction<NutriState>) => {
                  state.calories = action.payload.calories;
                  state.carbohydrates_total_g = action.payload.carbohydrates_total_g;
                  state.cholesterol_mg = action.payload.cholesterol_mg;
                  state.fat_saturated_g = action.payload.fat_saturated_g;
                  state.fat_total_g = action.payload.fat_total_g;
                  state.fiber_g = action.payload.fiber_g;
                  state.name = action.payload.name;
                  state.potassium_mg = action.payload.potassium_mg;
                  state.protein_g = action.payload.protein_g;
                  state.serving_size_g = action.payload.serving_size_g;
                  state.sodium_mg = action.payload.sodium_mg;
                  state.sugar_g = action.payload.sugar_g;
            },
      },
});

export const { setValue } = nutritionSlice.actions; // Exporting action creator

export default nutritionSlice.reducer; // Exporting the reducer function
