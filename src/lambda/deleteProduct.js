const AWS = require("aws-sdk");
const dynamoDb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (body) => {
  const { ProductId } = body;  // Get ProductId from arguments

  const getParams = {
    TableName: "Products-dev",  // Replace with your table name
    Key: { ProductId },
  };

  try {
    // Fetch the product to verify it exists
    const result = await dynamoDb.get(getParams).promise();

    if (!result.Item) {
      return {
        statusCode: 404,
        body: JSON.stringify({ message: "Product not found" }),
      };
    }

    // Proceed to delete the product from DynamoDB
    const deleteParams = {
      TableName: "Products-dev",  // Replace with your table name
      Key: { ProductId },
    };

    await dynamoDb.delete(deleteParams).promise();

    // Return the deleted product data
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
    console.error("Error deleting product:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Unable to delete product" }),
    };
  }
};
