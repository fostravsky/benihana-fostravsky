import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { DarkModeProvider } from '../context/DarkModeContext';
import { ToastContainer } from 'react-toastify';
import NavBar from './NavBar/NavBar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import Cart from './Cart/Cart';
import Checkout from './Checkout/Checkout';
import Footer from './Footer/Footer' 
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  
  return (
    <> 
      <BrowserRouter>
        <DarkModeProvider>
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/product/:id' element={<ItemDetailContainer/>}/>
            <Route path='/category/:category' element={<ItemListContainer/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
          </Routes>
          <Footer/>
          <ToastContainer/>
        </DarkModeProvider>
      </BrowserRouter>
    </>
      
  );
}

export default App;