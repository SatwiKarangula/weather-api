# Weather API Backend Application

## Project Overview

This project is a backend REST API application developed using Node.js, Express.js, and MongoDB Atlas. The application demonstrates backend development fundamentals including API creation, CRUD operations, MongoDB integration, request handling, logging, validation, environment variable usage, and project structuring.

The application allows users to create, read, update, and delete weather records stored in a MongoDB Atlas cloud database through custom API endpoints.

This project was built as part of backend and DevOps learning to understand real-world backend architecture, database connectivity, API development workflows, and cloud database integration.

---

# Technologies Used

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* dotenv
* Morgan
* CORS

---

# Features

* REST API Development
* MongoDB Atlas Integration
* CRUD Operations
* Modular Project Structure
* Logging Middleware
* Environment Variables
* Error Handling
* Input Validation
* HTTP Status Codes
* JSON API Responses

---

# Project Structure

```text
weather-api/
│
├── config/
│   └── db.js
│
├── controllers/
│   └── weatherController.js
│
├── middleware/
│   └── logger.js
│
├── models/
│   └── Weather.js
│
├── routes/
│   └── weatherRoutes.js
│
├── .env
├── server.js
├── package.json
└── README.md
```

---

# Folder Explanation

## config/

Contains database configuration and MongoDB connection setup.

## controllers/

Contains business logic and CRUD operation handling functions.

## middleware/

Contains middleware functions such as request logging.

## models/

Contains MongoDB schemas and models.

## routes/

Contains API endpoint routes.

## .env

Stores environment variables and sensitive credentials securely.

## server.js

Main entry point of the backend application.

---

# MongoDB Atlas Setup

## Step 1 — Create MongoDB Atlas Account

Visit:
https://www.mongodb.com/atlas

Create a free account and create a free-tier cluster.

---

## Step 2 — Create Database User

Navigate to:

```text
Security → Database Access
```

Create a database username and password.

Example:

```text
Username: satwik_db_user
Password: abcdefg
```

---

## Step 3 — Configure Network Access

Navigate to:

```text
Security → Network Access
```

Add:

```text
0.0.0.0/0
```

This allows access from all IP addresses for development purposes.

---

## Step 4 — Get Connection String

Navigate to:

```text
Cluster → Connect → Drivers
```

Select:

* Node.js

Copy the generated connection string.

---

# Environment Variable Setup

Create a `.env` file in the root directory.

Example:

```env
PORT=3000

MONGO_URI=mongodb+srv://cluster_name:user_password@weather-api.vlnf710.mongodb.net/weatherDB?retryWrites=true&w=majority&appName=weather-api
```

---

# Installation & Setup

## Clone Repository

```bash
git clone <your-github-repository-url>
```

---

## Navigate to Project Folder

```bash
cd weather-api
```

---

## Install Dependencies

# Required Dependencies
```bash
npm install express mongoose dotenv morgan cors
---

# Running the Application

```bash
```
Expected Output:

```text
MongoDB Connected Successfully
```


# API Endpoints

---

# 1. Create Weather Record
## Endpoint

```http
```

## Request Body

```json
{
  "temperature": 28,
  "weather": "Cloudy"
}
```

## Success Response

```json
{
  "_id": "6868xxxx",
  "city": "Bangalore",
  "weather": "Cloudy"
}
```

## Status Code

```text
201 Created
```

---

# 2. Get All Weather Records

## Endpoint

```http
GET /weather
```

## Response

```json
[
  {
    "_id": "6868xxxx",
    "city": "Bangalore",
    "temperature": 28,
    "weather": "Cloudy"
  }
]
```

## Status Code

```text
200 OK
```

---

# 3. Get Weather Record By ID

## Endpoint

```http
GET /weather/:id
```

## Status Code

```text
200 OK
```

---

# 4. Update Weather Record

## Endpoint

```http
PUT /weather/:id
```

## Request Body

```json
{
  "temperature": 32
}
```

## Status Code

```text
200 OK
```

---

# 5. Delete Weather Record

## Endpoint

```http
DELETE /weather/:id
```

## Success Response

```json
{
  "message": "Record Deleted Successfully"
}
```

## Status Code

```text
200 OK
```

---

# Application Flow

```text
Client Request
      ↓
Express Route
      ↓
Middleware Logger
      ↓
Controller
      ↓
Validation
      ↓
MongoDB Query
      ↓
Database
      ↓
JSON Response
```

---

# Logging Approach

The application uses Morgan middleware for request logging.

Installed using:

```bash
npm install morgan
```

Example Logs:

```text
GET /weather 200 12ms
POST /weather 201 18ms
DELETE /weather/6868xxxx 200 9ms
```

Logging helps:

* Monitor API activity
* Debug errors
* Track requests
* Improve backend observability

---

# Error Handling

The application uses try-catch blocks to handle runtime and database errors.

Example:

```javascript
try {
   // operation
} catch(error) {
   res.status(500).json({
      error: "Server Error"
   });
}
```

---

# Input Validation

Basic validation is implemented before database operations.

Example:

```javascript
if (!city || !temperature || !weather) {
   return res.status(400).json({
      error: "All fields are required"
   });
}
```

---

# HTTP Status Codes Used

| Status Code | Meaning               |
| ----------- | --------------------- |
| 200         | Successful Request    |
| 201         | Resource Created      |
| 400         | Bad Request           |
| 404         | Record Not Found      |
| 500         | Internal Server Error |

---

# Commands Used During Development

## Initialize Project

```bash
npm init -y
```

---

## Install Dependencies

```bash
npm install express mongoose dotenv morgan cors
```

---

## Run Server

```bash
node server.js
```

---

# Concepts Learned Through This Project

* REST API Development
* CRUD Operations
* MongoDB Atlas Integration
* Express Routing
* Middleware Usage
* Mongoose Schema Design
* Environment Variables
* Logging
* Error Handling
* Validation
* Backend Architecture
* Cloud Database Connectivity

---

# Future Improvements

* Add Authentication & Authorization
* Add JWT Security
* Add Docker Support
* Add API Documentation using Swagger
* Deploy to Cloud Platforms
* Add Weather Forecast Integration
* Add Advanced Validation
* Add Unit Testing

---

# Author

K. Satwik
B.Tech – Computer Science Engineering (AI & ML)
Andhra Loyola Institute of Engineering and Technology
Vijayawada, Andhra Pradesh
  "temperature": 28,
  "city": "Bangalore",
POST /weather

---
Server running on port 3000

node server.js

Start the server:

```


---
node server.js

```

