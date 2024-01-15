import { createSlice } from "@reduxjs/toolkit";
import { LocalStorageTypes } from "../../enums/localStorage";
import { getLocalStorage, setLocalStorage } from "../../utilities/localStorage";
import { Case } from "../../types/case";

const initialState: Case[] = [];

export const casesSlice = createSlice({
  name: "cases",
  initialState: getLocalStorage(LocalStorageTypes.CASES)
    ? JSON.parse(getLocalStorage(LocalStorageTypes.CASES) as string)
    : initialState,
  reducers: {
    addCase: (state, action) => {
      const newState = [...state, action.payload];
      setLocalStorage(LocalStorageTypes.CASES, JSON.stringify(newState));
      return newState;
    },
    replaceCase: (state, action) => {
      const newState = action.payload;
      setLocalStorage(LocalStorageTypes.CASES, JSON.stringify(newState));
      return newState;
    },
  },
});

export const { addCase, replaceCase } = casesSlice.actions;
