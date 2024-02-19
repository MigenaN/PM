
const productController = require('../controllers/product.controller');
module.exports = (app) => {
    app.post("/api/products/create", productController.createProduct);
    app.get("/api/products/", productController.getAllProducts);
    app.get("/api/products/:id", productController.getProductById);
    app.patch("/api/products/:id", productController.updateProduct);
    app.delete("/api/products/:id", productController.deleteProduct);
}


