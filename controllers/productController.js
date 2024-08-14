const Product = require('../models/Product');

// Get All Products
exports.getProducts = async (req, res) => {
    const products = await Product.find({});
    res.json(products);
};

// Get Product By ID
exports.getProductById = async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
};

// Create New Product
exports.createProduct = async (req, res) => {
    const { name, description, price, category, stock, imageUrl } = req.body;

    const product = new Product({ name, description, price, category, stock, imageUrl });
    await product.save();

    res.status(201).json(product);
};

// Update Product
exports.updateProduct = async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
        product.name = req.body.name || product.name;
        product.description = req.body.description || product.description;
        product.price = req.body.price || product.price;
        product.category = req.body.category || product.category;
        product.stock = req.body.stock || product.stock;
        product.imageUrl = req.body.imageUrl || product.imageUrl;

        await product.save();
        res.json(product);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
};

// Delete Product
exports.deleteProduct = async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
        await product.remove();
        res.json({ message: 'Product removed' });
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
};

