const AWS = require("aws-sdk");
const dynamoDb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (body) => {
  const { ProductId, Name, Description, Price, Category, Stock } = body

  // Get the existing product from DynamoDB
  const getParams = {
    TableName: "Products-dev",  // Replace with your table name
    Key: { ProductId },         // Using ProductId to find the product
  };

  try {
    // Fetch the current product from DynamoDB
    const result = await dynamoDb.get(getParams).promise();

    // If the product doesn't exist, return an error
    if (!result.Item) {
      return {
        statusCode: 404,
        body: JSON.stringify({ message: "Product not found" }),
      };
    }

    // Prepare the updated product data, using existing data if new data isn't provided
    const updatedProduct = {
      ProductId,
      Name: Name || result.Item.Name,           // Use existing Name if not provided
      Description: Description || result.Item.Description,
      Price: Price || result.Item.Price,
      Category: Category || result.Item.Category,
      Stock: Stock || result.Item.Stock,
      UpdatedAt: new Date().toISOString(),      // Update timestamp
    };

    // Update the product in DynamoDB
    const updateParams = {
      TableName: "Products-dev",  // Replace with your table name
      Key: { ProductId },
      UpdateExpression: "set #name = :name, #description = :description, #price = :price, #category = :category, #stock = :stock, #updatedAt = :updatedAt",
      ExpressionAttributeNames: {
        "#name": "Name",
        "#description": "Description",
        "#price": "Price",
        "#category": "Category",
        "#stock": "Stock",
        "#updatedAt": "UpdatedAt",
      },
      ExpressionAttributeValues: {
        ":name": updatedProduct.Name,
        ":description": updatedProduct.Description,
        ":price": updatedProduct.Price,
        ":category": updatedProduct.Category,
        ":stock": updatedProduct.Stock,
        ":updatedAt": updatedProduct.UpdatedAt,
      },
      ReturnValues: "ALL_NEW",  // Return the updated item
    };

    // Execute the update query
    const updateResult = await dynamoDb.update(updateParams).promise();

    // Return the updated product object
    return {
      ProductId: updateResult.Attributes.ProductId,
      Name: updateResult.Attributes.Name,
      Description: updateResult.Attributes.Description,
      Price: updateResult.Attributes.Price,
      Category: updateResult.Attributes.Category,
      Stock: updateResult.Attributes.Stock,
      CreatedAt: updateResult.Attributes.CreatedAt, // Assuming this field is set when the product was created
      UpdatedAt: updateResult.Attributes.UpdatedAt,
    };

  } catch (error) {
    console.error("Error updating product:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Unable to update product" }),
    };
  }
};
