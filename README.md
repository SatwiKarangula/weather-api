# Weather API Backend Application

## Project Overview

This is a simple backend application developed using Node.js and Express.js.
The application fetches real-time weather data from the OpenWeather public API and exposes custom REST API endpoints.

The purpose of this project is to demonstrate:

* Backend development basics
* API integration
* Custom API endpoint creation
* JSON response handling
* Node.js and Express fundamentals
* Linux terminal and Git workflow understanding

---

# Technologies Used

* Node.js
* Express.js
* Axios
* dotenv
* OpenWeather API

---

# Public API Used

## OpenWeather API

Provides real-time weather information for cities.

Website:
https://openweathermap.org/api

---

# Project Structure

```text
weather-api/
│
├── node_modules/
├── .env
├── package.json
├── package-lock.json
├── server.js
└── README.md
```

---

# Installation & Setup Instructions

## Step 1 — Clone Repository

```bash
git clone <your-github-repository-url>
```

---

## Step 2 — Navigate to Project Folder

```bash
cd weather-api
```

---

## Step 3 — Install Dependencies

```bash
npm install
```

---

# Required Packages

The following packages are used in this project:

```bash
npm install express axios dotenv
```

---

# Environment Variable Setup

Create a `.env` file in the root directory.

Example:

```env
API_KEY=your_openweather_api_key
```

---

# Running the Application

Start the server using:

```bash
node server.js
```

Server runs on:

```text
http://localhost:3000
```

---

# API Endpoints

## Get Weather By City

### Endpoint

```http
GET /weather/:city
```

### Example

```http
http://localhost:3000/weather/bangalore
```

---

# Sample JSON Response

```json
{
  "city": "Bangalore",
  "temperature": 28,
  "weather": "clear sky",
  "humidity": 60
}
```

---

# How the Application Works

1. User sends request to custom API endpoint.
2. Express server receives the request.
3. Axios sends request to OpenWeather API.
4. Weather data is fetched from external API.
5. Backend filters required information.
6. Clean JSON response is returned to the client.

---

# Concepts Used

* REST API
* Express Routing
* Environment Variables
* HTTP Requests
* JSON Response Handling
* Async/Await
* Error Handling

---

# Commands Used During Development

## Initialize Node Project

```bash
npm init -y
```

---

## Install Dependencies

```bash
npm install express axios dotenv
```

---

## Run Server

```bash
node server.js
```

---

# Future Improvements

* Add 5-day weather forecast endpoint
* Add error validation for invalid city names
* Add Docker support
* Deploy application to cloud platforms
* Add frontend interface

---

# Author

K. Satwik
B.Tech — Computer Science Engineering (AI & ML)
Andhra Loyola Institute of Engineering and Technology
