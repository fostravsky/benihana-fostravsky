import './App.css';
import NavBar from './NavBar/NavBar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import Footer from './Footer/Footer';

function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting={"Proximamente encontraras nuestros productos"}/>
      <Footer/>
    </>
  );
}

export default App;
