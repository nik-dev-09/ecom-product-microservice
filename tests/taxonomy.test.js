const taxonomyService = require("../src/services/taxonomyService");

test("should create a taxonomy", async () => {
  const taxonomy = { TaxonomyId: "1", Name: "Category1", Type: "category" };
  const createdTaxonomy = await taxonomyService.createTaxonomy(taxonomy);
  expect(createdTaxonomy.Name).toBe("Category1");
});
