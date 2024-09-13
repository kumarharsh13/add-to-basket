import React from "react";
import "../styles/item.css";
import Item from "./Item";

function ItemList({ products, toAddItemInCart, updateProduct }) {
  return (
    <div className="item-list">
      {products.map((product) => (
        <Item
          key={product.id}
          product={product}
          toAddItemInCart={toAddItemInCart}
          updateProduct={updateProduct}
        />
      ))}
    </div>
  );
}

export default ItemList;
