const AWS = require("aws-sdk");
const dynamoDb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  const { ProductId } = event.pathParameters;
  const { Name, Description, Price, Category, Stock } = JSON.parse(event.body);

  const params = {
    TableName: "Products",
    Key: { ProductId },
    UpdateExpression:
      "set #name = :name, #desc = :desc, #price = :price, #category = :category, #stock = :stock, UpdatedAt = :updatedAt",
    ExpressionAttributeNames: {
      "#name": "Name",
      "#desc": "Description",
      "#price": "Price",
      "#category": "Category",
      "#stock": "Stock",
    },
    ExpressionAttributeValues: {
      ":name": Name,
      ":desc": Description,
      ":price": Price,
      ":category": Category,
      ":stock": Stock,
      ":updatedAt": new Date().toISOString(),
    },
    ReturnValues: "ALL_NEW",
  };

  try {
    const result = await dynamoDb.update(params).promise();
    return {
      statusCode: 200,
      body: JSON.stringify(result.Attributes),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Unable to update product" }),
    };
  }
};
