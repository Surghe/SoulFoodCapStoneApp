 Restaurant MERN Stack Application

This project is a full-stack restaurant application built with the MERN stack:

MongoDB for the database

Express.js for backend routing and API

React.js for the frontend interface

Node.js for the runtime environment

It includes JWT-based authentication, CRUD functionality for menu items, user roles (admin/user), and is styled for basic usability.

 Project Structure

restaurant-app/
├── backend/
│   ├── models/
│   │   └── Menu.js
│   ├── routes/
│   │   └── menu.js
│   ├── middleware/
│   │   └── auth.js
│   ├── server.js
│   └── .env
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   └── AddMenuItem.js
│   │   ├── context/
│   │   │   └── AuthContext.js
│   │   ├── App.js
│   │   ├── index.js
│   └── .env
└── README.md

🔧 Setup Instructions

📦 Backend Setup

Navigate to the backend folder:

cd backend

Install dependencies:

npm install express mongoose cors dotenv jsonwebtoken bcryptjs


Start the backend server:

node server.js

 Frontend Setup

Navigate to the frontend folder:

cd frontend

Install dependencies:

npm install react react-dom axios react-router-dom

Start the frontend server:

npm start

🧠 Features Overview

🔐 Authentication

JWT authentication

User registration and login

Role-based access (admin vs. regular user)

🍔 Menu Item Management

Add new menu items (admin only)

View menu items (all users)

Edit/Delete menu items (admin only)

⚙️ Tech Usage

useState, useEffect, and useContext for frontend state

Express routes for API

MongoDB + Mongoose schema for menu items

JWT tokens validated by authenticateToken middleware

🔄 CRUD Implementation

Operation

Frontend Component

Backend Route

Create

AddMenuItem.js

POST /api/menu

Read

MenuList.js

GET /api/menu

Update

EditMenuItem.js

PUT /api/menu/:id

Delete

MenuList.js

DELETE /api/menu/:id

✅ Logs & Debugging

Frontend logs confirm component load and API call status.

Backend logs confirm API hits, saved items, or JWT errors.

💡 Summary

This application demonstrates a practical MERN stack restaurant management system with authentication, admin capabilities, and full CRUD functionality.
