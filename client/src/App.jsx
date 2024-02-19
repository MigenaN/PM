import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'; 
import ProductForm from './components/ProductForm';
import ProductDetail from './components/ProductDetail'; 
import ProductUpdate from './components/ProductUptade';
import ProductList from './components/ProductList';
import Main from './views/Main';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  
      <div>
        <BrowserRouter>
          <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/create" element={<ProductForm />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/edit/:id" element={<ProductUpdate />} />
        </Routes>
          
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
