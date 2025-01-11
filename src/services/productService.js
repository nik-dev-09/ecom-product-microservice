const productModel = require("../models/productModel");

const createProduct = async (product) => {
  return await productModel.createProduct(product);
};

const getProduct = async (productId) => {
  return await productModel.getProduct(productId);
};

const updateProduct = async (productId, productData) => {
  return await productModel.updateProduct(productId, productData);
};

const deleteProduct = async (productId) => {
  return await productModel.deleteProduct(productId);
};

module.exports = { createProduct, getProduct, updateProduct, deleteProduct };
