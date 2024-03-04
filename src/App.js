import './App.css';
import Home from './Components/Home';
import Nav from './Components/Nav';
import Products from './Components/Products';
import Error from './Components/Error'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import AddProduct from './Components/AddProduct';

function App() {
  let location = useLocation();
  let isRouteDefined = ['/', '/home', '/products', '/add'].includes(location.pathname);
  return (
    <BrowserRouter>

    {isRouteDefined && <Nav />}
       <div className="container mt-3">
       <Routes>
            {isRouteDefined ? (
              <>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/add" element={<AddProduct />} />
              </>
            ) : (
              <Route path="*" element={<Error />} />
            )}
          </Routes>
      </div>
    </BrowserRouter>
  );
}



export default App;