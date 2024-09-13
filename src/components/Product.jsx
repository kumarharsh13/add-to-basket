import React from "react";
import ItemList from "./ItemList";

function Product({ products, toAddItemInCart, updateProduct }) {
  return (
    <div className="product">
      <ItemList
        products={products}
        toAddItemInCart={toAddItemInCart}
        updateProduct={updateProduct}
      />
    </div>
  );
}

export default Product;
