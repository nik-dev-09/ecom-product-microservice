const AWS = require("aws-sdk");
const dynamoDb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  const { ProductId, Name, Description, Price, Category, Stock } = JSON.parse(
    event.body
  );

  const params = {
    TableName: "Products",
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
