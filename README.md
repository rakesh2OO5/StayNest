## 🏡 StayNest

StayNest is a full-stack property renting platform that allows users to discover, create, and manage accommodation listings with ease.

The project focuses on building a scalable backend architecture with authentication, authorization, validation, map integration, and reusable UI components — simulating a real-world rental platform.

### Live On Render :
- https://staynest-elr9.onrender.com

## 🚀 Features
### 🏠 Listings
- Create, edit, and delete property listings
- View all listings and individual listing details
- RESTful routing architecture

### 🔐 Authentication
- User signup, login, and logout using Passport.js
- Session-based authentication
- Secure password handling

### 🛡 Authorization
- Only listing owners can edit or delete their listings
- Protected routes using middleware
- User-based access control

### ⭐ Reviews System
- Add and delete reviews for listings
- Star-based rating system using Starability
- Reviews associated with users and listings

### 🖼️ Image Management
- Upload and store listing images using Cloudinary
- Efficient media handling for production-style applications

### 🗺️ Map Integration
- Display listing locations using interactive maps
- Integrated Leaflet with MapTiler for geolocation visualization

### 🎨 UI & Layout
- Reusable EJS boilerplate layout
- Dynamic navbar based on authentication state
- Flash messages for user feedback
- Clean and responsive UI design

### 💬 Flash Messages
- Success and error alerts for user actions
- Improved UX with real-time feedback

### ⚙️ Backend Features
- Joi schema validation for robust data validation
- Centralized error handling using custom ExpressError class
- Async error handling using wrapAsync utility
- Middleware-based authorization and route protection
- Clean MVC architecture for scalability

## 🛠 Tech Stack
### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- Passport.js (Authentication)
- Joi (Validation)

### Frontend
- EJS templating
- CSS
- Vanilla JavaScript
- Leaflet (Maps)
- Starability (Ratings UI)

### Tools & Services
- Git & GitHub
- Nodemon
- MapTiler (Map API)
- Cloudinary (Image storage & management)


## 📂 Project Structure
```
StayNest/
│
├── controllers/
│   ├── listing.js
│   ├── review.js
│   └── user.js
│
├── models/
│   ├── listing.js
│   ├── review.js
│   └── user.js
│
├── routes/
│   ├── listing.js
│   ├── review.js
│   └── user.js
│
├── utils/
│   ├── wrapAsync.js
│   └── ExpressError.js
│
├── views/
│   ├── listings/
│   ├── users/
│   ├── includes/
│   ├── layouts/
│   └── error.ejs
│
├── public/
├── middleware.js
├── schema.js
├── app.js
└── package.json
```
## ⚙️ Installation & Setup
```
git clone https://github.com/rakesh2OO5/StayNest.git
cd StayNest
npm install
nodemon app.js

Application runs at:
http://localhost:5000

```

## 🧠 Key Concepts Implemented
- RESTful API design
- MVC architecture
- Middleware-based design patterns
- Authentication & authorization (Passport.js)
- Database relationships (one-to-many)
- Backend validation using Joi
- Centralized error handling strategies
- Building production-style Node.js applications

## 👤 Author
Rakesh D
