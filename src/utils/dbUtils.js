const AWS = require("aws-sdk");
const dynamoDB = new AWS.DynamoDB.DocumentClient();

const getDynamoDbClient = () => {
  return dynamoDB;
};

module.exports = { getDynamoDbClient };
