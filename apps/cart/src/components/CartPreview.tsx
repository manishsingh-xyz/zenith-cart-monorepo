import { useSelector, useDispatch } from "react-redux";
import {
  RootState,
  removeFromCart,
  updateQuantity,
  clearCart,
} from "container/store";

const CartPreview = () => {
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const handleQuantityChange = (id: number, quantity: number) => {
    if (quantity > 0) {
      dispatch(updateQuantity({ id, quantity }));
    }
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const totalPrice = cart.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="p-4 border rounded mt-4 bg-black-400">
      <h2 className="text-lg font-bold mb-2">🛒 Cart Preview</h2>

      {cart.items.length === 0 ? (
        <p className="text-sm text-gray-500">Cart is empty</p>
      ) : (
        <>
          <ul className="space-y-4 mb-4">
            {cart.items.map((item) => (
              <li key={item.id} className="flex justify-between items-center">
                <div>
                  <p className="font-medium">{item.title}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <label htmlFor={`qty-${item.id}`} className="text-sm">
                      Qty:
                    </label>
                    <input
                      id={`qty-${item.id}`}
                      type="number"
                      min={1}
                      value={item.quantity}
                      onChange={(e) =>
                        handleQuantityChange(item.id, parseInt(e.target.value))
                      }
                      className="w-16 px-2 py-1 border rounded text-sm"
                    />
                  </div>
                </div>
                <button
                  onClick={() => handleRemove(item.id)}
                  className="text-red-600 hover:underline text-sm"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <div className="flex justify-between items-center">
            <p className="font-semibold text-sm">
              Total: ₹{totalPrice.toFixed(2)}
            </p>
            <button
              onClick={handleClearCart}
              className="px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600"
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPreview;
