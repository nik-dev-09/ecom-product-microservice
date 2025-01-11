const taxonomyModel = require("../models/taxonomyModel");

const createTaxonomy = async (taxonomy) => {
  return await taxonomyModel.createTaxonomy(taxonomy);
};

const getTaxonomy = async (taxonomyId) => {
  return await taxonomyModel.getTaxonomy(taxonomyId);
};

module.exports = { createTaxonomy, getTaxonomy };
