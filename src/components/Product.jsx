import React from "react";
import ItemList from "./ItemList";

function Product({ products, toAddItemInCart }) {
  return (
    <div className="product">
      <ItemList products={products} toAddItemInCart={toAddItemInCart} />
    </div>
  );
}

export default Product;
