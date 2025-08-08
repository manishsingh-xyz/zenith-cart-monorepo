import { configureStore } from "@reduxjs/toolkit";
import cartReducer, {
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
} from "./slices/cartSlice";
import userReducer, { setUser, logout } from "./slices/userSlice";
import uiReducer, { toggleTheme, setModal } from "./slices/uiSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
    ui: uiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// ✅ Re-export actions for remote usage
export {
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
  setUser,
  logout,
  toggleTheme,
  setModal,
};
