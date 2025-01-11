const productController = require("./controllers/productController");
const taxonomyController = require("./controllers/taxonomyController");
const logger = require("./utils/logger");

exports.createProduct = async (event) => {
  try {
    logger.info("Creating product");
    const response = await productController.createProduct(event);
    return response;
  } catch (error) {
    logger.error("Error creating product", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Error creating product" }),
    };
  }
};

exports.getProduct = async (event) => {
  try {
    logger.info("Fetching product");
    const response = await productController.getProduct(event);
    return response;
  } catch (error) {
    logger.error("Error fetching product", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Error fetching product" }),
    };
  }
};

exports.updateProduct = async (event) => {
  try {
    logger.info("Updating product");
    const response = await productController.updateProduct(event);
    return response;
  } catch (error) {
    logger.error("Error updating product", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Error updating product" }),
    };
  }
};

exports.deleteProduct = async (event) => {
  try {
    logger.info("Deleting product");
    const response = await productController.deleteProduct(event);
    return response;
  } catch (error) {
    logger.error("Error deleting product", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Error deleting product" }),
    };
  }
};

exports.createTaxonomy = async (event) => {
  try {
    logger.info("Creating taxonomy");
    const response = await taxonomyController.createTaxonomy(event);
    return response;
  } catch (error) {
    logger.error("Error creating taxonomy", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Error creating taxonomy" }),
    };
  }
};

exports.getTaxonomy = async (event) => {
  try {
    logger.info("Fetching taxonomy");
    const response = await taxonomyController.getTaxonomy(event);
    return response;
  } catch (error) {
    logger.error("Error fetching taxonomy", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Error fetching taxonomy" }),
    };
  }
};
