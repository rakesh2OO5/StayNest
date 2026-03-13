## 🏡 StayNest
StayNest is a full-stack property renting platform that allows users to discover, create, and manage accommodation listings with ease.
The project focuses on building a scalable backend architecture with clean error handling, validation, and reusable UI components while progressively enhancing product features.

## 🚀 Features
- Create property listings
- View all listings
- Edit listing details
- Delete listings
- Image URL support
- RESTful routing architecture
- MongoDB data persistence
- Server-side rendering with EJS
- Joi schema validation for request data
- Centralized error handling middleware
- Async route wrapper for cleaner controllers
- Reusable EJS boilerplate layout
- Navbar & footer components

## 🛠 Tech Stack
### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- Joi (validation)

### Frontend
- EJS templating
- CSS
- Vanilla JavaScript

### Tools
- Git & GitHub
- Nodemon

## 📂 Project Structure
```
StayNest/
│
├── models/
│   └── listing.js
│
├── utils/
│   ├── wrapAsync.js
│   └── ExpressError.js
│
├── views/
│   ├── listings/
│   │   ├── index.ejs
│   │   ├── new.ejs
│   │   ├── edit.ejs
│   │   └── show.ejs
│   │
│   ├── includes/
│   │   ├── navbar.ejs
│   │   └── footer.ejs
│   │
│   ├── layouts/
│   │   └── boilerplate.ejs
│   │
│   └── error.ejs
│
├── public/
│   ├── css/
│   ├── js/
│   └── assets/
│
├── init/
├── schema.js
├── app.js
└── package.json
```

## ⚙️ Installation & Setup
```
git clone https://github.com/rakesh2OO5/StayNest.git
cd StayNest
npm install

Start the server:
nodemon app.js

Application runs at:
http://localhost:5000
```

## 🎯 Future Improvements

- User authentication & authorization
- Image upload with Cloudinary
- Reviews & ratings system
- Wishlist functionality
- Booking workflow
- Map-based location discovery
- Advanced search & filtering
- Responsive UI
- Deployment

## 💡 Learning Goals

### This project is focused on:
- RESTful API design
- MVC architecture
- Middleware design patterns
- Database modeling with MongoDB
- Backend error handling strategies
- Git workflow & version control
- Building production-style Node.js apps

## 👤 Author
Rakesh D
