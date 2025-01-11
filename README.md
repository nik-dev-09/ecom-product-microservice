# Product Information Microservice 🚀

This repository contains a microservice for managing product information in an **AWS Amplify hosted eCommerce application**. The service is designed for high performance and scalability using **AWS DynamoDB**, **AWS Lambda**, and **AWS AppSync**. It provides CRUD operations for managing products and their associated taxonomy attributes, such as categories and tags.

---

## Features 🎯

- **CRUD Operations for Products**:
  - Create, retrieve, update, and delete products.
- **Taxonomy Management**:
  - Manage hierarchical categories and tags using `ParentId` and `Name` attributes.
- **GraphQL API**:
  - Built with AWS AppSync for seamless interaction between frontend and backend.
- **AWS Lambda Integration**:
  - Serverless backend powered by Node.js.
- **DynamoDB Integration**:
  - High-performance NoSQL database with partition and sort keys.
- **Continuous Deployment**:
  - Automated build, test, and deployment with AWS CodePipeline and CodeBuild.

---

## Tech Stack 🛠️

- **Backend**: Node.js, AWS Lambda, AWS DynamoDB
- **Database**: AWS DynamoDB
- **API**: AWS AppSync (GraphQL)
- **Deployment**: Serverless Framework, AWS CodePipeline, AWS CodeBuild
