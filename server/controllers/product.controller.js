const Product = require('../models/product.model');    
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}

const createProduct = async (req, res) => {
try {
    const { title, price, description } = req.body;
    const newProduct = new Product({ title, price, description });
    const savedProduct = await newProduct.save();
    res.json(savedProduct);
} catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
}
};
const getAllProducts = async (req, res) => {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
  
  const getProductById = async (req, res) => {
    const productId = req.params.id;
  
    try {
      const product = await Product.findById(productId);
      if (!product) {
        return res.status(404).json({ error: "Product not found" });
      }
      res.json(product);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
  
  const updateProduct = async (req, res) => {
    const productId = req.params.id;
    const { title, price, description } = req.body;
  
    try {
      const updatedProduct = await Product.findByIdAndUpdate(
        productId,
        { title, price, description, updatedAt: Date.now() },
        { new: true }
      );
      res.json(updatedProduct);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
  
  const deleteProduct = async (req, res) => {
    const productId = req.params.id;
  
    try {
      await Product.findByIdAndDelete(productId);
      res.json({ message: "Product deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
  
  module.exports = { createProduct, getAllProducts, getProductById, updateProduct, deleteProduct };
