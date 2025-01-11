const taxonomyService = require("../services/taxonomyService");

exports.createTaxonomy = async (event) => {
  const taxonomy = JSON.parse(event.body);
  return await taxonomyService.createTaxonomy(taxonomy);
};

exports.getTaxonomy = async (event) => {
  const taxonomyId = event.pathParameters.taxonomyId;
  return await taxonomyService.getTaxonomy(taxonomyId);
};
