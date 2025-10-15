import './App.css';
import { CartProvider } from './context/CartContext/CartProvider';
import './components/Item/Item.css';
import './components/ItemListContainer/ItemListContainer.css';
import './components/Nav/Nav.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import './components/Footer/Footer.css';
import './components/Header/Header.css';


function App() {

  return (
    <>
      <BrowserRouter>
      <CartProvider>
      <div className="AppContainer">
        <Header/>
        <main className="MainContent">
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/detail/:id" element={<ItemDetailContainer/>}/>
        </Routes>
        </main>
        <Footer/>
      </div>
      </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App