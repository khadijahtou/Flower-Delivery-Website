# Flower-Delivery-Website

---

# Flower Delivery Backend API

A secure and scalable REST API for managing flower products and user accounts.
Built with **Node.js**, **Express**, and **MongoDB**, featuring **JWT authentication**, **data validation**, and **Cloudinary** image hosting.

---

## Features

- Authentication & Authorization – Passport.js with JWT
- Secure Passwords – bcrypt hashing with salt
- Validated Inputs – using `validator` to sanitize and validate requests
- Flower Management – add, list, and delete flower products
- User Management – view and delete registered users
- Cloud Image Storage – Cloudinary integration for product images
- Configurable Environment – `.env` file support for sensitive keys

---

## Tech Stack

| Layer        | Technology               | Purpose                         |
| ------------ | ------------------------ | ------------------------------- |
| Server       | Node.js, Express         | REST API framework              |
| Database     | MongoDB + Mongoose ODM   | Data storage & modeling         |
| Auth         | Passport.js, JWT, bcrypt | Authentication & security       |
| Validation   | validator                | Input validation & sanitization |
| File Storage | Multer + Cloudinary      | Image upload & cloud storage    |

---

## API Endpoints

### User Routes

| Method | Endpoint              | Description           |
| ------ | --------------------- | --------------------- |
| POST   | `/api/users/register` | Register a new user   |
| POST   | `/api/users/login`    | Login & get JWT token |
| GET    | `/api/users`          | Get all users         |
| DELETE | `/api/users/:id`      | Delete a user         |

### Flower Routes

| Method | Endpoint           | Description      |
| ------ | ------------------ | ---------------- |
| GET    | `/api/flowers`     | Get all flowers  |
| POST   | `/api/flowers`     | Add a new flower |
| DELETE | `/api/flowers/:id` | Delete a flower  |

---

## Quick Start

### 1. Clone & Install

```bash
git clone <repo-url>
cd Flower-Delivery-Website
npm install
```

### 2. Configure Environment Variables

Create a `.env` file in the root directory:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
PORT=3000
```

### 3. Run the Server

```bash
npm run dev
```

The API will be available at:

```
http://localhost:3000
```

---

## Security Highlights

- Passwords hashed with **bcrypt** + salt before storage
- JWT tokens for stateless authentication
- Environment variables to keep secrets out of code
- Validated and sanitized user input to prevent attacks

---

## License

This project is licensed under the **MIT License**. You are free to use and adapt it for your own projects.

---
