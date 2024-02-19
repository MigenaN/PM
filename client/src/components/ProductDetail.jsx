import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();

  const fetchProductDetail = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/products/${id}`);
      setProduct(response.data);
    } catch (error) {
      console.error('Error fetching product detail:', error);
    }
  };

  const deleteProduct = async () => {
    try {
      await axios.delete(`http://localhost:8000/api/products/${id}`);
      navigate('/');
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  useEffect(() => {
    fetchProductDetail();
  }, [id]);

  return (
    <div>
      <h2>Product Detail</h2>
      {product ? (
        <div>
          <h3>{product.title}</h3>
          <p>Price: ${product.price}</p>
          <p>Description: {product.description}</p>
          <button onClick={deleteProduct}>Delete Product</button>
        </div>
      ) :(
        <p>Loading..</p>
      )}
    </div>
  );
};

export default ProductDetails;


