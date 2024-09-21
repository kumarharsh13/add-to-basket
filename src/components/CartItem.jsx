import React, { useState } from "react";
import "../styles/item.css";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlus,
  faCircleMinus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

function CartItem({ item, updateTotal, toRemoveItemFromCart }) {
  const [qty, setQty] = useState(item.qty);
  const [price, setPrice] = useState(item.price * item.qty);

  function handleQtyUpdate(count) {
    if (qty === 0 && count === -1) return;

    const newQty = qty + count;
    const newPrice = item.price * newQty;
    item.totalItemQty = newQty;
    item.totalItemPrice = newPrice;
    setQty(newQty);
    setPrice(newPrice);
    updateTotal();
		if(item.totalItemQty <= 0) {
			toRemoveItemFromCart(item)
		}
  }

  return (
    <div className="cart-item" onChange={updateTotal()}>
      <div className="cart-item-detail">
        <img src={`${process.env.PUBLIC_URL}${item.image}`} alt="stone" />
        <div className="cart-item-cost-detail">
          <h4>{item.name}</h4>
          <span>
            <Button>
              <FontAwesomeIcon
                icon={faTrash}
                style={{ color: "#6b4600" }}
                onClick={() => {
                  toRemoveItemFromCart(item);
                }}
              />
            </Button>
          </span>
          <h4>${item.price}</h4>
          <h4>${price}</h4>
          <div className="cart-item-qty">
            <Button
              onClick={() => {
                handleQtyUpdate(-1);
              }}
            >
              <FontAwesomeIcon
                icon={faCircleMinus}
                style={{ color: "#6b4600" }}
              />
            </Button>
            <span>{qty}</span>
            <Button
              onClick={() => {
                handleQtyUpdate(1);
              }}
            >
              <FontAwesomeIcon
                icon={faCirclePlus}
                style={{ color: "#6b4600" }}
              />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
