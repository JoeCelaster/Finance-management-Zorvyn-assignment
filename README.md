# User Management API

This is a backend API built using Node.js, Express, and MongoDB. It supports authentication, role-based access, and user status management (active/inactive).

## Setup

### Install dependencies:
```bash
npm install
````

### Create a .env file:
```env
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
```

### Run the server:
```bash
npm run dev
```

Server runs on: http://localhost:5000

## Features

- User registration and login
- JWT authentication
- Role-based access (admin/user)
- CRUD operations for users
- Toggle user status (active/inactive)

## API Routes

### Auth
- **Register**: `POST /auth/register`
- **Login**: `POST /auth/login`

### Users
*(All routes require token in header: `Authorization: Bearer <token>`)*

- **Get all users (admin)**: `GET /users`
- **Get user by ID**: `GET /users/:id`
- **Update user**: `PUT /users/:id`
- **Delete user (admin)**: `DELETE /users/:id`

## Toggle User Status

**Endpoint**: `PATCH /users/:id/toggle-status`

This switches user status between active and inactive.

### Example response:
```json
{
  "msg": "User status updated",
  "isActive": true
}
```

> **Important Note**: Do not open this route in a browser. Browsers send GET requests, but this route uses PATCH. Use Postman or Thunder Client.

## User Model Example
```javascript
isActive: {
  type: Boolean,
  default: true
}
```

## Author
Joe Celaster