const productService = require("../src/services/productService");

test("should create a product", async () => {
  const product = {
    ProductId: "123",
    Name: "Test Product",
    Price: 99.99,
    Stock: 10,
  };
  const createdProduct = await productService.createProduct(product);
  expect(createdProduct.Name).toBe("Test Product");
});
