import { useState } from "react";
import ProductList from "../components/ProductList.jsx";
import Cart from "../components/ShoppingCart.jsx";

function ShoppingCartScreen() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);

      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Simple Shopping Cart</h1>

      <ProductList onAddToCart={addToCart} />

      <Cart items={cartItems} onRemove={removeFromCart} />
    </div>
  );
}

export default ShoppingCartScreen;