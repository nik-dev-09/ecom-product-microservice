const AWS = require("aws-sdk");
const dynamoDb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (body) => {
  const { Name, Description, Price, Category, Stock } = body; // Extract arguments from the GraphQL request
  console.log('reached here! 1')

  // Create the Product object
  const Product = {
    ProductId: (Date.now()).toString(),  // Generating a unique ProductId based on the current timestamp
    Name,
    Description,
    Price,
    Category,
    Stock,
    CreatedAt: new Date().toISOString(),
    UpdatedAt: new Date().toISOString(),
  };

  // Set up DynamoDB parameters
  const params = {
    TableName: "Products-dev", // Replace with your table name
    Item: Product,
  };

  try {
    // Insert the product into DynamoDB
    await dynamoDb.put(params).promise();
    console.log('reached here! 2')

    // Return the product object directly in the response
    return {
      ProductId: Product.ProductId,
      Name: Product.Name,
      Description: Product.Description,
      Price: Product.Price,
      Category: Product.Category,
      Stock: Product.Stock,
      CreatedAt: Product.CreatedAt,
      UpdatedAt: Product.UpdatedAt,
    };
  } catch (error) {
    console.error(error);
    console.log('reached here! 3')

    // Return a custom error message if there is an issue
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Unable to create product" }),
    };
  }
};
