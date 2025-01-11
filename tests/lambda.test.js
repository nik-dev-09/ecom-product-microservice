const lambda = require("../src/lambda/createProduct");

test("should create a product via lambda", async () => {
  const event = {
    body: JSON.stringify({
      ProductId: "123",
      Name: "Test Product",
      Price: 99.99,
      Stock: 10,
    }),
  };
  const result = await lambda.createProduct(event);
  expect(result.statusCode).toBe(200);
});
