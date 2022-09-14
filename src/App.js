import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import './css/navbar.css'
import './css/style.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
    	<NavBar />
        <Routes>
          <Route exact path="/" element={<ItemListContainer />}/>
          <Route exact path="/categorias/:tipo" element={<ItemListContainer />}/>
		  <Route exact path="/producto/:id" element={<ItemDetailContainer />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
