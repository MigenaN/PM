import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = (props) => {
  const { products, setProducts } = props;
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const createProduct = () => {
    axios.post('http://localhost:8000/api/products/create', {
      title,
      price,
      description,
    })
      .then((res) => {
        console.log(res);
        console.log(res.data);


        const updatedProducts = Array.isArray(products) ? [...products, res.data] : [res.data];

        setProducts(updatedProducts);
        setTitle('');
        setPrice('');
        setDescription('');
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <p>
        <label>Title</label><br />
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </p>
      <p>
        <label>Price</label><br />
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
      </p>
      <p>
        <label>Description</label><br />
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </p>
      <button type="button" onClick={createProduct}>
        Create
      </button>
    </div>
  );
};

export default ProductForm;



