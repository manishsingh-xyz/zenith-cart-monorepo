import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface UIState {
  theme: "light" | "dark";
  showModal: boolean;
}

const initialState: UIState = {
  theme: "light",
  showModal: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleTheme(state) {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
    setModal(state, action: PayloadAction<boolean>) {
      state.showModal = action.payload;
    },
  },
});

export const { toggleTheme, setModal } = uiSlice.actions;
export default uiSlice.reducer;
