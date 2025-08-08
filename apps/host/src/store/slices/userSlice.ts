import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  isLoggedIn: boolean;
  name: string;
  token: string;
}

const initialState: UserState = {
  isLoggedIn: false,
  name: "",
  token: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<{ name: string; token: string }>) {
      state.isLoggedIn = true;
      state.name = action.payload.name;
      state.token = action.payload.token;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.name = "";
      state.token = "";
    },
  },
});

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;
