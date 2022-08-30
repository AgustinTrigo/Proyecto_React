import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import './css/navbar.css'
import './css/style.css';

function App() {
  const objeto = {nombre: "PRODUCTO 1", precio: "150"};
 
  return (
    <header>
      <NavBar />
      <ItemListContainer dato={objeto} />
    </header>
  );
}

export default App;
