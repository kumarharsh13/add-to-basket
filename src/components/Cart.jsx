import CartItemList from "./CartItemList";
import MyCart from "./MyCart";
import Button from "./Button";
import '../styles/item.css'
import { useContext } from "react";
import { CartContext } from "../App";

function Cart() {

  const { totalPrice, totalQty, handleCancel} = useContext(CartContext)

  return (
    <div className="cart">
      <MyCart />
      <CartItemList />
      <div className="item-action">
        <div className="item-total">
          <h3>Qty: {totalQty}</h3>
          <h3>Price: ${totalPrice}</h3>
        </div>
        <div className="item-action-btn">
          <Button
            onClick={() => {
              alert("Your Basket is on Its Way!");
              handleCancel();
            }}
          >
            Buy
          </Button>{" "}
          <Button onClick={handleCancel}>Cancel</Button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
