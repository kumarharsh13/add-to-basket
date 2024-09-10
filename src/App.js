import './styles/App.css';
import Product from './components/Product';
import Cart from './components/Cart';
import Header from './components/Header';
import { useState } from 'react';


function App() {
  const [addToCart, setAddToCart] = useState([]);

  const handleAddToCart = (item) => {
    setAddToCart(prevCart => [...prevCart, item]);
  };

  
  const products = [
    {
      id: 101,
      name: "Stone",
      description: "Paani Me Pathhaarrrr",
      image: "/images/Pathar.jpg",
      rating: 5,
      qty: 1,
      price: 20,
      item_added: false,
      totalItemQty: 1,
      totalItemPrice: 20
    },
    {
      id: 102,
      name: "Stone",
      description: "Paani Me Pathhaarrrr",
      image: "/images/Pathar.jpg",
      rating: 5,
      qty: 1,
      price: 20,
      item_added: false,
      totalItemQty: 1,
      totalItemPrice: 20
    },
    {
      id: 103,
      name: "Stone",
      description: "Paani Me Pathhaarrrr",
      image: "/images/Pathar.jpg",
      rating: 5,
      qty: 1,
      price: 20,
      item_added: false,
      totalItemQty: 1,
      totalItemPrice: 20
    },
    {
      id: 104,
      name: "Stone",
      description: "Paani Me Pathhaarrrr",
      image: "/images/Pathar.jpg",
      rating: 5,
      qty: 1,
      price: 20,
      item_added: false,
      totalItemQty: 1,
      totalItemPrice: 20
    },
    {
      id: 105,
      name: "Stone",
      description: "Paani Me Pathhaarrrr",
      image: "/images/Pathar.jpg",
      rating: 5,
      qty: 1,
      price: 20,
      item_added: false,
      totalItemQty: 1,
      totalItemPrice: 20
    },
    {
      id: 106,
      name: "Stone",
      description: "Paani Me Pathhaarrrr",
      image: "/images/Pathar.jpg",
      rating: 5,
      qty: 1,
      price: 20,
      item_added: false,
      totalItemQty: 1,
      totalItemPrice: 20
    }
  ];

  return (
    <div className='App'>
      <Header />
      <div className='home'>
        <Product products={products} toAddItemInCart={handleAddToCart} ></Product>
        <Cart cartItems={addToCart}></Cart>
      </div>
    </div>
  );
}

export default App;
