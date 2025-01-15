const AWS = require("aws-sdk");
const dynamoDb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (body) => {
  const { ProductId } = body;  // Get ProductId from arguments

  const params = {
    TableName: "Products-dev",  // Replace with your table name
    Key: { ProductId },
  };

  try {
    const result = await dynamoDb.get(params).promise();

    // If product is not found, return error
    if (!result.Item) {
      return {
        statusCode: 404,
        body: JSON.stringify({ message: "Product not found" }),
      };
    }

    // Return the fetched product
    return {
      ProductId: result.Item.ProductId,
      Name: result.Item.Name,
      Description: result.Item.Description,
      Price: result.Item.Price,
      Category: result.Item.Category,
      Stock: result.Item.Stock,
      CreatedAt: result.Item.CreatedAt,
      UpdatedAt: result.Item.UpdatedAt,
    };

  } catch (error) {
    console.error("Error fetching product:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Unable to fetch product" }),
    };
  }
};
