const { invokeGraphQL } = require("../src/graphql/appSync");

test("should fetch product data", async () => {
  const query = `query { getProduct(ProductId: "123") { Name Price } }`;
  const result = await invokeGraphQL(query, {});
  expect(result.data.getProduct.Name).toBe("Test Product");
});
