import React from "react";
import "../styles/item.css";
import Item from "./Item";
import { useContext } from "react";
import { CartContext } from '../App';

function ItemList() {

  const {products} = useContext(CartContext);
  
  return (
    <div className="item-list">
      {products.map((product) => (
        <Item
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}

export default ItemList;
