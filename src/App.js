import './styles/App.css';
import Product from './components/Product';
import Cart from './components/Cart';
import Header from './components/Header';


function App() {
  return (
    <div className='App'>
      <Header />
      <div className='home'>
        <Product></Product>
        <Cart></Cart>
      </div>
    </div>
  );
}

export default App;
