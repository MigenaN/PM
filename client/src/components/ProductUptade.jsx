import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const ProductUpdate = ({ products, setProducts }) => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8000/api/products/${id}`)
      .then((res) => {
        setTitle(res.data.title);
        setPrice(res.data.price);
        setDescription(res.data.description);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const updateProduct = (e) => {
    e.preventDefault();
    axios.patch(`http://localhost:8000/api/products/${id}`, {
      title,
      price,
      description,
    })
      .then((res) => {
        console.log(res);
        setProducts((prevProducts) =>
          prevProducts.map((product) =>
            product._id === id ? { ...product, title, price, description } : product
          )
        );
        navigate('/');
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Update a Product</h1>
      <form onSubmit={updateProduct}>
        <p>
          <label>Title</label><br />
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </p>
        <p>
          <label>Price</label><br />
          <input
            type="number"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </p>
        <p>
          <label>Description</label><br />
          <textarea
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </p>
        <button type="button" onClick={updateProduct}>
        Update
      </button>
      </form>
    </div>
  );
};

export default ProductUpdate;

