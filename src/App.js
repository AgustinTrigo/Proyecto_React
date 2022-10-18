import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import './css/orders.css'
import './css/loader.css'
import './css/cart.css'
import './css/navbar.css'
import './css/style.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import CartProvider from './context/cartContext';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Orders from './components/Orders';
import MiCompra from './components/MiCompra';

function App() {
  return (
    <>
    	<CartProvider>
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route exact path="/" element={<ItemListContainer />}/>
					<Route exact path="/orders" element={<Orders />}/>
					<Route exact path="/categorias/:tipo" element={<ItemListContainer />}/>
					<Route exact path="/producto/:id" element={<ItemDetailContainer />}/>
					<Route exact path="/cart/" element={<Cart />}/>
					<Route exact path="/checkout/" element={<Checkout />}/>
					<Route exact path="/micompra" element={<MiCompra/>}/>
				</Routes>
			</BrowserRouter>
      	</CartProvider>
    </>
  );
}

export default App;
