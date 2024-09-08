import React from 'react'
import CartItemList from './CartItemList'
import MyCart from './MyCart'

function Cart() {
  return (
    <div className="cart">
      <MyCart />
      <CartItemList />
      <div className="item-action">
        <div className='item-total'>
          <h3>Qty: 4</h3>
          <h3>Price: $400</h3>
        </div>
        <div className='item-action-btn'>
          <button>Buy</button>
          <button>Cancel</button>
        </div>
      </div>
    </div>
  )
}

export default Cart