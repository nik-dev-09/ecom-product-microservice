const productController = require("../controllers/productController");
const taxonomyController = require("../controllers/taxonomyController");

module.exports = {
  Query: {
    getProduct: productController.getProduct,
    getTaxonomy: taxonomyController.getTaxonomy,
  },
  Mutation: {
    createProduct: productController.createProduct,
    updateProduct: productController.updateProduct,
    deleteProduct: productController.deleteProduct,
    createTaxonomy: taxonomyController.createTaxonomy,
  },
};
