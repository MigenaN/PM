import React, { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductList = ({ products, setProducts }) => {
  const deleteProduct = (productId) => {
    axios.delete(`http://localhost:8000/api/products/${productId}`)
      .then((res) => {
      
        setProducts((prevProducts) => prevProducts.filter((product) => product._id !== productId));
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios.get('http://localhost:8000/api/products')
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setProducts]);

  return (
    <div>
      {products.map((product, index) => (
        <div key={index}>
          <Link to={`/products/${product._id}`}>{product.title}</Link>
          |
          <Link to={`/edit/${product._id}`}>Edit</Link>
          |
          <button onClick={() => deleteProduct(product._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
