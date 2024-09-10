import "../styles/item.css";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Item({ product, toAddItemInCart }) {
  const [isAdded, setIsAdded] = useState(product.item_added || false);

  const handleAddToCart = () => {
    toAddItemInCart(product);
    setIsAdded(true);
  };

  return (
    <div className="item">
      <div className="item-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="item-details">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p>
          <b>Rating:</b> {product.rating}{" "}
          <FontAwesomeIcon icon={faStar} style={{ color: "#2CB835" }} />
        </p>
        <div className="price-cart">
          <h4>${product.price}</h4>
          {isAdded ? (
            <Button disabled>{"Added"}</Button>
          ) : (
            <Button onClick={handleAddToCart}>{"Add to Cart"}</Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Item;
