const AWS = require("aws-sdk");
const dynamoDB = new AWS.DynamoDB.DocumentClient();

const tableName = "ProductTaxonomyAttributes";

const getTaxonomy = async (taxonomyId) => {
  const params = {
    TableName: tableName,
    Key: { TaxonomyId: taxonomyId },
  };
  const result = await dynamoDB.get(params).promise();
  return result.Item;
};

const createTaxonomy = async (taxonomy) => {
  const params = {
    TableName: tableName,
    Item: taxonomy,
  };
  await dynamoDB.put(params).promise();
  return taxonomy;
};

module.exports = { getTaxonomy, createTaxonomy };
