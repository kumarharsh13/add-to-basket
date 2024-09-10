import React, { useState } from "react";
import CartItemList from "./CartItemList";
import MyCart from "./MyCart";
import Button from "./Button";

function Cart({ cartItems }) {
  const [totalQty, setTotalQty] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  function handleTotalQtyAndPrice() {
    const totals = cartItems.reduce((index, cartItem) => {
      index.totalItemQty += Number(cartItem.totalItemQty);
      index.totalItemPrice += Number(cartItem.totalItemPrice) * Number(cartItem.totalItemQty);
      return index;
    }, { totalItemQty: 0, totalItemPrice: 0 });
    setTotalQty(totals.totalItemQty);
    setTotalPrice(totals.totalItemPrice);
  };

  return (
    <div className="cart">
      <MyCart />
      <CartItemList
        cartItems={cartItems}
        updateTotal={handleTotalQtyAndPrice}
      />
      <div className="item-action">
        <div className="item-total">
          <h3>Qty: {totalQty}</h3>
          <h3>Price: ${totalPrice}</h3>
        </div>
        <div className="item-action-btn">
          <Button>{"Buy"}</Button>
          <Button>{"Cancel"}</Button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
