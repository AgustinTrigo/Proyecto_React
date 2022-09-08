import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import './css/navbar.css'
import './css/style.css';

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <ItemListContainer />
      </main>
    </>
  );
}

export default App;
