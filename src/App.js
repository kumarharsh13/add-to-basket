import "./styles/App.css";
import Product from "./components/Product";
import Cart from "./components/Cart";
import Header from "./components/Header";
import { useState } from "react";
import products_list from "./products_list.json";

function App() {
  const [products, setProducts] = useState(products_list);
  const [addToCart, setAddToCart] = useState([]);
  const [totalQty, setTotalQty] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleAddToCart = (item) => {
    setAddToCart((prevCart) => [...prevCart, item]);
  };

  const handleDeleteFromCart = (itemToRemoved) => {
    const updatedCartItems = [...addToCart];
    setAddToCart(
      updatedCartItems.filter((item) => item.id !== itemToRemoved.id)
    );
    itemToRemoved.item_added = false;

    if (updatedCartItems.length === 1) {
      setTotalQty(0);
      setTotalPrice(0);
    } else {
      handleTotalQtyAndPrice();
    }
    updateProduct(itemToRemoved);
  };

  const updateProduct = (item) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === item.id
          ? { ...product, item_added: !product.item_added }
          : product
      )
    );
  };

  function handleCancel() {
    setProducts(products_list);
    setAddToCart([]);
    setTotalQty(0);
    setTotalPrice(0);
  }
  function handleTotalQtyAndPrice() {
    const totals = addToCart.reduce(
      (index, cartItem) => {
        index.totalItemQty += Number(cartItem.totalItemQty);
        index.totalItemPrice += Number(cartItem.totalItemPrice);
        return index;
      },
      { totalItemQty: 0, totalItemPrice: 0 }
    );
    setTotalQty(totals.totalItemQty);
    setTotalPrice(totals.totalItemPrice);
  }

  return (
    <div className="App">
      <Header />
      <div className="home">
        <Product
          products={products}
          toAddItemInCart={handleAddToCart}
          updateProduct={updateProduct}
        ></Product>
        <Cart
          cartItems={addToCart}
          toRemoveItemFromCart={handleDeleteFromCart}
          updateTotal={handleTotalQtyAndPrice}
          totalQty={totalQty}
          totalPrice={totalPrice}
          handleCancel={handleCancel}
        ></Cart>
      </div>
    </div>
  );
}

export default App;
