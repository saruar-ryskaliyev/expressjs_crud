const { get } = require('mongoose');
const Product = require('../models/product.model');
const { post } = require('../routes/product.route');


const getProducts = async(req, res) => {
    try{
        const products = await Product.find();
        res.status(200).json(products);

    } catch (err) {
        res.status(500).json({ message: err.message })
    }   

}

const getProduct = async(req, res) => {
    try{
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);

    } catch (err) {
        res.status(500).json({ message: err.message })
    }   

}

const postProduct = async(req, res) => {
    try{
        const product =  await Product.create(req.body);
        res.status(200).json(product);

    } catch (err) {
        res.status(500).json({ message: err.message })
    }   

}

const putProduct = async(req, res) => {
    try{
        const product = await Product.findByIdAndUpdate(req.params.id, req.body)

        const updatedProduct = await Product.findById(req.params.id);
        res.status(200).json(updatedProduct);
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

const deleteProduct = async(req, res) => {
    try{
        const product = await Product.findByIdAndDelete(req.params.id);
        res.status(200).json(product);

    } catch (err) {
        res.status(500).json({ message: err.message })
    }   

}




module.exports = {
    getProducts,
    getProduct,
    postProduct,
    putProduct,
    deleteProduct
};