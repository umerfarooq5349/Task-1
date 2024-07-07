# Task-1: Basic API Development with Node.js and Next.js

## Project Description

This project implements a simple RESTful API using Node.js with Next.js as the framework. The focus is on fundamental concepts of Node.js such as routing, middleware, and handling requests and responses. This project is part of a series of tasks evaluating the implementation of MERN stack functionalities.

## Features

- CRUD Operations on Ecommerce Products
- JSON Parsing Middleware
- Error Handling for Invalid Requests and Server Errors
- API Documentation using Postman / Swagger

## Project Structure

```plaintext
Task-1/
├── dist/
├── ecommerce/
└── server/
    ├── node_modules/
    ├── src/
    │   ├── controllers/
    │   ├── middleware/
    │   ├── models/
    │   ├── routes/
    │   ├── services/
    │   └── utils/
    ├── package.json
    ├── tsconfig.json
    └── README.md
```

## Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/umerfarooq5349/Task-1.git
    cd Task-1
    ```

2. Navigate to the `server` directory and install dependencies:

    ```sh
    cd server
    npm install
    ```

3. Navigate to the `ecommerce` directory and install dependencies:

    ```sh
    cd ../ecommerce
    npm install
    ```

## Running the Application

1. Start the server:

    ```sh
    cd server
    npm start
    ```

2. Start the ecommerce client:

    ```sh
    cd ../ecommerce
    npm run dev
    ```

## API Endpoints

### Get All Products

- **URL:** `/api/items`
- **Method:** `GET`
- **Description:** Retrieves a list of all products.
- **Response:**
    ```json
    [
        {
            "id": 1,
            "name": "Product 1",
            "price": 100
        }
    ]
    ```

### Create a Product

- **URL:** `/api/items`
- **Method:** `POST`
- **Description:** Creates a new product.
- **Request Body:**
    ```json
    {
        "name": "New Product",
        "price": 150
    }
    ```
- **Response:**
    ```json
    {
        "message": "Product created successfully"
    }
    ```

### Update a Product

- **URL:** `/api/items/:id`
- **Method:** `PUT`
- **Description:** Updates an existing product.
- **Request Body:**
    ```json
    {
        "name": "Updated Product",
        "price": 200
    }
    ```
- **Response:**
    ```json
    {
        "message": "Product updated successfully"
    }
    ```

### Delete a Product

- **URL:** `/api/items/:id`
- **Method:** `DELETE`
- **Description:** Deletes an existing product.
- **Response:**
    ```json
    {
        "message": "Product deleted successfully"
    }
    ```

## Dependencies

- **Node.js**: LTS version
- **Next.js**: Latest version
- **Express**: Latest version
- **SASS**: For styling
- **TypeScript**: For both Next.js and Node.js

## Author

Umer Farooq

---
