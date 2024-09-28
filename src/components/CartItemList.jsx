import React, { useContext } from "react";
import CartItem from "./CartItem";
import { CartContext } from "../App";

function CartItemList() {
  const { cartItems } = useContext(CartContext)
  return (
    <div className="cart-item-list">
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
        />
      ))}
    </div>
  );
}

export default CartItemList;
