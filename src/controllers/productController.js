const productService = require("../services/productService");

exports.createProduct = async (event) => {
  const product = JSON.parse(event.body);
  return await productService.createProduct(product);
};

exports.getProduct = async (event) => {
  const productId = event.pathParameters.productId;
  return await productService.getProduct(productId);
};

exports.updateProduct = async (event) => {
  const productId = event.pathParameters.productId;
  const productData = JSON.parse(event.body);
  return await productService.updateProduct(productId, productData);
};

exports.deleteProduct = async (event) => {
  const productId = event.pathParameters.productId;
  return await productService.deleteProduct(productId);
};
