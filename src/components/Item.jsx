import "../styles/item.css";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Item({ product, toAddItemInCart, updateProduct }) {

  const handleAddToCartButton = () => {
    toAddItemInCart(product);
    updateProduct(product)
  };

  return (
    <div className="item">
      <div className="item-image">
        <img src={`${process.env.PUBLIC_URL}${product.image}`} alt={product.name} />
      </div>
      <div className="item-details">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p>
          <b>Rating:</b> {product.rating}{" "}
          <FontAwesomeIcon icon={faStar} style={{ color: "#6b4600" }} />
        </p>
        <div className="price-cart">
          <h4>${product.price}</h4>
          {product.item_added ? (
            <Button disabled>{"Added"}</Button>
          ) : (
            <Button onClick={handleAddToCartButton}>{"Add to Cart"}</Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Item;
