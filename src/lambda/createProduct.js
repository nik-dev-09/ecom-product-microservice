const AWS = require("aws-sdk");
const dynamoDb = new AWS.DynamoDB.DocumentClient();

exports.handler = async () => {
  const { ProductId, Name, Description, Price, Category, Stock } = body;

  const params = {
    TableName: "Products-dev",
    Item: {
      ProductId,
      Name,
      Description,
      Price,
      Category,
      Stock,
      CreatedAt: new Date().toISOString(),
      UpdatedAt: new Date().toISOString(),
    },
  };

  try {
    await dynamoDb.put(params).promise();
    return {
      statusCode: 201,
      body: JSON.stringify({ message: "Product created successfully!" }),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Unable to create product" }),
    };
  }
};