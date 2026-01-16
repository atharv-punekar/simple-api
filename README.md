# Simple API 

A lightweight **API** built using **Express.js**. This project implements basic health-check and user-management endpoints using GET and POST methods. The API demonstrates route parameters, query parameters, and proper usage of HTTP status codes.
All endpoints were tested using **Postman**, and the Postman collection is included in the repository.

---

## Tech Stack

* **Node.js**
* **Express.js**
* **Postman** (for testing)

---

Server runs on:

```
http://localhost:3000
```

---

## API Endpoints

| Method | Endpoint          | Description          |
| ------ | ----------------- | -------------------- |
| GET    | /health           | API health check     |
| GET    | /users            | Retrieve all users   |
| GET    | /users/:id        | Fetch user by ID     |
| GET    | /users?role=admin | Filter users by role |
| POST   | /users            | Add a new user       |

---

## Postman Testing

Screenshots included in the repository:

* **Health Check** – `GET /health`
* **Get User by ID** – `GET /users/:id`
* **Get Users by Role** – `GET /users?role=`
* **Get All Users** – `GET /users`
* **Create User** – `POST /users`

Postman Collection file is provided for easy import.

---

## Author

**Atharv Punekar**

---
