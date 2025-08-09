import CartPreview from "../components/CartPreview";

const CartPage = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      <CartPreview />
    </div>
  );
};

export default CartPage;
