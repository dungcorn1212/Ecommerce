# Full Stack E-commerce Web Application

A full-stack **E-commerce application** using **Spring Boot** (Java) for the backend and **ReactJS with Vite** for the frontend. This application demonstrates the integration of RESTful APIs with a modern frontend stack, ideal for learning and demonstration purposes.

To ensure objectivity and to serve the purpose of the [https://devopsedu.vn/observability-for-devops](https://devopsedu.vn/observability-for-devops) series, this project is an open-source GitHub repository that has been modified. This sample project simply demonstrates how a system operates correctly.

## Project Structure

```
Ecommerce/
├── Ecommerce-Backend/
├── Ecommerce-Frontend/
```

## Backend - Spring Boot

### Technologies Used

* Java 17+
* Spring Boot
* Spring Data JPA
* MySQL (can be adapted)
* Maven

### Backend Directory Structure

```
Ecommerce-Backend/
├── controller/
├── model/
├── repo/
├── service/
├── resources/
│   ├── application.properties
│   
└── pom.xml
```

### Setup Instructions

1. **Database Setup:**

   * Create a MySQL database, e.g., `ecommerce_db`.
   * Update `application.properties`:

     ```properties
     spring.datasource.url=jdbc:mysql://192.168.157.11:3306/ecommerce_db
     spring.datasource.username=ecommerce
     spring.datasource.password=StrongPa55WorD
     ```

2. **Run the App:**

   ```bash
   cd Ecommerce-Backend
   mvn clean install -DskipTests
   java -jar target/ecom-proj-0.0.1-SNAPSHOT.jar
   ```

### REST API Endpoints

| Method | Endpoint         | Description        |
| ------ | ---------------- | ------------------ |
| GET    | `/products`      | Fetch all products |
| GET    | `/products/{id}` | Get product by ID  |
| POST   | `/products`      | Add new product    |
| PUT    | `/products/{id}` | Update product     |
| DELETE | `/products/{id}` | Delete product     |

---

## Frontend - React + Vite

### Technologies Used

* ReactJS
* Vite (bundler)
* Axios (API calls)
* Bootstrap (UI)
* JavaScript (ES6+)

### Frontend Directory Structure

```
Ecommerce-Frontend/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── App.jsx
│   └── main.jsx
├── package.json
└── vite.config.js
```

### Getting Started

1. **Install dependencies:**

   ```bash
   cd Ecommerce-Frontend
   npm install
   ```

2. **Run the app:**

   ```bash
   # npm
   npm run dev -- --host
   ```
   ```bash
   # docker
   docker build -t ecommerce-fe:v1 .
   docker run --name=ecommerce-fe -dp 5173:80 ecommerce-fe:v1
   ```

   This will launch the frontend at `http://192.168.157.11:5173`.

3. **Connect to Backend:**

   Update the backend URL in API service files (usually inside `src/` or `src/services/`) if needed:

   ```js
   axios.get('http://192.168.157.11:8080/products')
   ```

### Features

* Product List (from Spring Boot backend)
* Dynamic rendering using React components
* Fully responsive UI
* Easy integration with further features (cart, checkout, login)# Ecommerce
