# gRPC API Documentation 🚀

## Overview 🌐
This repository contains a gRPC-based API that allows seamless communication between clients and the server. The API is designed for high performance, low latency, and efficient data transfer. You can test and debug the gRPC services using **Postman**.

## 📖 API Documentation
Access the complete API documentation in Postman:  
📌 [Postman Collection](https://documenter.getpostman.com/view/36611651/2sAYdcqryo)

![gRPC API Screenshot 3](https://res.cloudinary.com/dpf5bkafv/image/upload/v1740232463/grpc/ohzthjxfsaoxh6ghy90e.png)  


## Features ✨
- 🚀 High-performance communication
- 📡 Supports **Unary**, **Streaming**, and **Bi-directional** calls
- 🔐 Secure and efficient data transfer
- 🛠️ Easy testing using Postman

### Live Preview 
## Laptop 💻
![gRPC API Screenshot 2](https://res.cloudinary.com/dpf5bkafv/image/upload/v1740232461/grpc/xtbycbcdlfyupuqglofi.png)  

## Tab 
![gRPC API Screenshot 1](https://res.cloudinary.com/dpf5bkafv/image/upload/v1740232460/grpc/bfeaqu2xnpw4jtrurbag.png)  


## Getting Started 🛠️

### Prerequisites 📋
Make sure you have the following installed:
- **Node.js** (v14+ recommended)
- **Postman** (latest version)
- **gRPC & Protocol Buffers**

### Installation ⚙️
```bash
# Clone the repository
git clone https://github.com/kashyapprajapat/grpc_server
cd grpc_server

# Install dependencies
npm install
```

## Running the gRPC Server 🚀
```bash
npm start
```
The server will start at `0.0.0.0:30043`.

## gRPC API Endpoints 🔌
### 1️⃣ Get Users
- **Method:** Unary RPC
- **Endpoint:** `Userservice.GetUsers`
- **Request Format:**
  ```json
  {}
  ```
- **Response Format:**
  ```json
  {
    "users": [
      { "id": "1", "name": "John Doe", "email": "john@example.com" }
    ]
  }
  ```

### 2️⃣ Create User
- **Method:** Unary RPC
- **Endpoint:** `Userservice.CreateUser`
- **Request Format:**
  ```json
  {
    "name": "Jane Doe",
    "email": "jane@example.com"
  }
  ```
- **Response Format:**
  ```json
  {
    "id": "2",
    "name": "Jane Doe",
    "email": "jane@example.com"
  }
  ```

## Testing with Postman 🧪
1. Open **Postman**
2. Go to **File > New > gRPC Request**
3. Enter the server address: `grpc://0.0.0.0:30043`
4. Select a **Service** and **Method**
5. Add the request body in **JSON** format
6. Click **Send** and view the response ✅

## Troubleshooting 🛠️
If you encounter errors:
- Ensure the server is running on the correct port.
- Verify your `.proto` files are correctly defined.
- Restart Postman if needed.
- Use **Postman Console** to debug requests.

## License 📜
This project is licensed under the **MIT License**.

---
🚀 Happy Coding! 🎉 ☕🧋

---










## Personal Learning Notes 📝
![gRPc notes](https://res.cloudinary.com/dpf5bkafv/image/upload/v1740233091/grpc/bregwwrznhet27nixpvg.jpg) 
