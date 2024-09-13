import React from "react";
import CartItem from "./CartItem";

function CartItemList({ cartItems, updateTotal, toRemoveItemFromCart }) {
  return (
    <div className="cart-item-list">
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          updateTotal={updateTotal}
          toRemoveItemFromCart={toRemoveItemFromCart}
        />
      ))}
    </div>
  );
}

export default CartItemList;
