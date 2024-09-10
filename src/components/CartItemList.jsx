import React from "react";
import CartItem from "./CartItem";

function CartItemList({ cartItems, updateTotal }) {

  function handleDeleteItem(id) {
    const index = cartItems.findIndex(item => item.id === id);
    if (index !== -1) {
      cartItems.splice(index, 1);
      updateTotal();
    }
	}

  return (
    <div className="cart-item-list">
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} updateTotal={updateTotal} />
      ))}
    </div>
  );
}

export default CartItemList;
