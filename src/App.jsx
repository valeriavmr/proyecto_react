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
import { Cart } from './components/Cart/Cart';
import { ProductFormContainer } from './components/adminComponents/ProductFormContainer/ProductFormContainer';
import { RutaProtegida } from './components/RutaProtegida/RutaProtegida';
import { MainLayout} from "./layouts/MainLayout"
import { AdminLayout} from "./layouts/AdminLayout"
import { Login } from './components/Login/Login';
import { EditProductContainer } from './components/adminComponents/EditProductContainer/EditProductContainer';


function App() {

  return (
    <>
      <BrowserRouter>
      <CartProvider>
      <div className="AppContainer">
        <Header/>
        <main className="MainContent">
        <Routes>
          <Route element={<MainLayout/>}>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/category/:category" element={<ItemListContainer/>}/>
          <Route path="/detail/:id" element={<ItemDetailContainer/>}/>
          <Route path="/carrito" element={<Cart/>}/>
          </Route>
          <Route element={<AdminLayout/>} path="/admin">
            <Route index element={<Login/>}/>
            <Route path="alta-productos" element={<RutaProtegida><ProductFormContainer/></RutaProtegida>}/>
            <Route path="editar/:id" element={<RutaProtegida><EditProductContainer/></RutaProtegida>}/>
            <Route path="producto/:id" element={<RutaProtegida><ItemDetailContainer /></RutaProtegida>}/>
          </Route>
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
