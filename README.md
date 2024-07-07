## Task-1: Basic API Development with Node.js and Next.js 🚀

### Project Description

Welcome to Task-1! This project demonstrates a simple RESTful API built with **Node.js** and **Next.js**. The goal is to get hands-on experience with **Node.js fundamentals** such as routing, middleware, and request/response handling.

### Features

- **CRUD Operations** on Ecommerce Products 🛍️
- JSON Parsing **Middleware** 🛠️
- Robust **Error Handling** for Various Scenarios ❗
- **API Documentation** with Postman/Swagger 📜

### Project Structure

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

### Installation

1. **Clone the repository:**

    ```sh
    git clone https://github.com/umerfarooq5349/Task-1.git
    cd Task-1
    ```

2. **Install server dependencies:**

    ```sh
    cd server
    npm install
    ```

3. **Install ecommerce client dependencies:**

    ```sh
    cd ../ecommerce
    npm install
    ```

### Running the Application

1. **Start the server:**

    ```sh
    cd server
    npm start
    ```

    ![Server Start](https://via.placeholder.com/400x200)

2. **Start the ecommerce client:**

    ```sh
    cd ../ecommerce
    npm run dev
    ```

    ![Client Start](https://via.placeholder.com/400x200)

### API Endpoints

#### Get All Products

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

#### Create a Product

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

### Dependencies

- **Node.js**: LTS version
- **Next.js**: Latest version
- **Express**: Latest version
- **SASS**: For styling
- **TypeScript**: For both Next.js and Node.js

---
### Author

Umer Farooq
