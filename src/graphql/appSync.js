const AWS = require("aws-sdk");
const appsync = new AWS.AppSync();

const graphqlUrl = process.env.APPSYNC_GRAPHQL_URL;
const apiKey = process.env.APPSYNC_API_KEY;

const invokeGraphQL = async (query, variables) => {
  const params = {
    apiId: graphqlUrl,
    query: query,
    variables: variables,
    headers: {
      "x-api-key": apiKey,
    },
  };
  const result = await appsync.graphql(params).promise();
  return result;
};

module.exports = { invokeGraphQL };
