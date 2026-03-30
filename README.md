## 🏡 StayNest

StayNest is a full-stack property renting platform that allows users to discover, create, and manage accommodation listings with ease.

The project focuses on building a scalable backend architecture with authentication, authorization, validation, and reusable UI components while progressively enhancing product features.

## 🚀 Features
### 🏠 Listings
- Create, edit, and delete property listings
- View all listings and individual listing details
- Image URL support
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
- Add reviews to listings
- Delete reviews
- Reviews linked to users and listings
### 💬 Flash Messages
- Success and error alerts for user actions
- Improved UX with real-time feedback
### ⚙️ Backend Features
- Joi schema validation for request data
- Centralized error handling middleware
- Async route wrapper for cleaner controllers
### 🎨 UI & Layout
- Reusable EJS boilerplate layout
- Dynamic navbar (login/logout state)
- Header & footer components
- Styled responsive pages
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
### Tools
- Git & GitHub
- Nodemon
## 📂 Project Structure
```
StayNest/
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
## 🎯 Future Improvements
- Image upload with Cloudinary
- Wishlist functionality
- Booking workflow
- Map-based location integration
- Advanced search & filtering
- Responsive UI improvements
- Deployment (Render / Railway)
## 💡 Learning Goals
- RESTful API design
- MVC architecture
- Middleware design patterns
- Authentication & authorization
- Database relationships (one-to-many)
- Backend error handling strategies
- Building production-style Node.js apps

## 👤 Author
Rakesh D