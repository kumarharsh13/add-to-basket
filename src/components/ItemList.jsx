import React from "react";
import "../styles/item.css";
import Item from "./Item";

function ItemList({ products, toAddItemInCart }) {
  return (
    <div className="item-list">
      {products.map((product) => (
        <Item
          key={product.id}
          product={product}
          toAddItemInCart={toAddItemInCart}
        />
      ))}
    </div>
  );
}

export default ItemList;
