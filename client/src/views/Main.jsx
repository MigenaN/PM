import React, { useState } from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

const Main = () => {
  const [products, setProducts] = useState([]);

  return (
    <div>
      <ProductForm products={products} setProducts={setProducts} />
      <ProductList products={products} setProducts={setProducts} />
    </div>
  );
};

export default Main;

