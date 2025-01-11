const AWS = require("aws-sdk");
const dynamoDB = new AWS.DynamoDB.DocumentClient();

const tableName = "Products";

const getProduct = async (productId) => {
  const params = {
    TableName: tableName,
    Key: { ProductId: productId },
  };
  const result = await dynamoDB.get(params).promise();
  return result.Item;
};

const createProduct = async (product) => {
  const params = {
    TableName: tableName,
    Item: product,
  };
  await dynamoDB.put(params).promise();
  return product;
};

const updateProduct = async (productId, productData) => {
  const params = {
    TableName: tableName,
    Key: { ProductId: productId },
    UpdateExpression:
      "set #name = :name, #description = :description, #price = :price, #stock = :stock, #updatedAt = :updatedAt",
    ExpressionAttributeNames: {
      "#name": "Name",
      "#description": "Description",
      "#price": "Price",
      "#stock": "Stock",
      "#updatedAt": "UpdatedAt",
    },
    ExpressionAttributeValues: {
      ":name": productData.name,
      ":description": productData.description,
      ":price": productData.price,
      ":stock": productData.stock,
      ":updatedAt": new Date().toISOString(),
    },
    ReturnValues: "ALL_NEW",
  };
  const result = await dynamoDB.update(params).promise();
  return result.Attributes;
};

const deleteProduct = async (productId) => {
  const params = {
    TableName: tableName,
    Key: { ProductId: productId },
  };
  await dynamoDB.delete(params).promise();
  return { ProductId: productId };
};

module.exports = { getProduct, createProduct, updateProduct, deleteProduct };
