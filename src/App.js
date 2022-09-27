import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import './css/cart.css'
import './css/navbar.css'
import './css/style.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import CartProvider from './context/cartContext';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

function App() {
  return (
    <>
    	<CartProvider>
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route exact path="/" element={<ItemListContainer />}/>
					<Route exact path="/categorias/:tipo" element={<ItemListContainer />}/>
					<Route exact path="/producto/:id" element={<ItemDetailContainer />}/>
					<Route exact path="/cart/" element={<Cart />}/>
					<Route exact path="/checkout/" element={<Checkout />}/>
				</Routes>
			</BrowserRouter>
      	</CartProvider>
    </>
  );
}

export default App;
