import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

import type { PokeSaved } from "@/lib/types";

type Poket = {
  value: PokeSaved[];
};

const initialState = {
  value: [],
} as Poket;

export const poketMonster = createSlice({
  name: "poketMonster",
  initialState,
  reducers: {
    saveMonster: (state, action: PayloadAction<PokeSaved>) => {
      const { payload } = action;

      const existingData = state?.value?.find((e) => e.name === payload.name);

      if (!existingData) {
        const newValue = state.value;
        newValue.push(payload);
        state.value = newValue;

        toast.success("Horray!! You've a new collections", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      } else {
        toast.error("Upssss!! You've this already!", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      }
    },
    releaseMonster: (state, action: PayloadAction<string>) => {
      const filtered = state.value.filter((e) => e.name !== action.payload);
      state.value = filtered;

      toast.success("This pokemon has been released", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    },
  },
});

export const { saveMonster, releaseMonster } = poketMonster.actions;
export default poketMonster.reducer;
