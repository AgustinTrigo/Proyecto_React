import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import './css/navbar.css'
import './css/style.css';

function App() {
  const objeto = {nombre: "PRODUCTO 1", precio: "150", stock: 5, inicial: 1};
  const objeto2 = {nombre: "PRODUCTO 2", precio: "300", stock: 3, inicial: 1};
 
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>CATALOGO</h1>
        <ItemListContainer dato={objeto} />
        <ItemListContainer dato={objeto2} />
      </main>
    </>
  );
}

export default App;
