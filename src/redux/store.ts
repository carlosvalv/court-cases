import { configureStore } from "@reduxjs/toolkit";
import { Case } from "../types/case";
import { casesSlice } from "./states/case";

export interface AppStore {
  cases: Case[];
}

export default configureStore<AppStore>({
  reducer: {
    cases: casesSlice.reducer,
  },
});
