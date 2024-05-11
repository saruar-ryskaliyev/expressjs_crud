const express = require('express')
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');

const productRoute = require('./routes/product.route');

const app = express()


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/products", productRoute);




mongoose.connect('mongodb+srv://saruar:saruar@backenddb.tdcm2kr.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB')
.then(() => {
    console.log('Connected to MongoDB')

    app.listen(3000, () => {
        console.log('Server is running on http://localhost:3000')
    });
})
.catch((err) => {
    console.log('Failed to connect to MongoDB', err)
});
