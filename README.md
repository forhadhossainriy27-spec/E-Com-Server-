# 🛒 MERN E-Commerce Platform

A full-stack E-Commerce web application built with the MERN Stack (MongoDB, Express.js, React.js, Node.js). The project includes authentication, product management, shopping cart, wishlist, checkout, and payment integration with bKash, Nagad, and Rocket.

---

## 🚀 Tech Stack

### Frontend
- React.js
- Vite
- React Router DOM
- Redux Toolkit
- Axios
- React Hook Form
- Tailwind CSS
- React Hot Toast
- Framer Motion

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- bcryptjs
- Cookie Parser
- Multer
- CORS
- dotenv

### Payment Gateway
- bKash (Sandbox)
- Nagad (Sandbox)
- Rocket (Manual/API)

---

# 📂 Project Structure

```
mern-ecommerce/
│
├── client/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   ├── uploads/
│   ├── validators/
│   ├── app.js
│   ├── server.js
│   └── package.json
│
├── .gitignore
└── README.md
```

---

# ✨ Features

## 👤 User Features

- User Registration & Login
- JWT Authentication
- Product Search
- Product Filter
- Product Sorting
- Product Details
- Shopping Cart
- Wishlist
- Checkout
- Order History
- User Profile
- Coupon System
- Product Reviews

---

## 🛠️ Admin Features

- Admin Dashboard
- Product Management
- Category Management
- Brand Management
- Order Management
- User Management
- Coupon Management
- Sales Reports
- Inventory Management

---

# 💳 Payment Methods

- bKash
- Nagad
- Rocket

---

# 🗄 Database Collections

- Users
- Products
- Categories
- Brands
- Reviews
- Wishlist
- Cart
- Orders
- Payments
- Coupons
- Addresses

---

# 🔐 Security

- JWT Authentication
- Password Hashing
- Role-based Authorization
- Protected Routes
- Input Validation
- Payment Verification
- Secure Environment Variables

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/your-username/mern-ecommerce.git
```

---

## Go to Project

```bash
cd mern-ecommerce
```

---

## Install Client

```bash
cd client
npm install
```

---

## Install Server

```bash
cd ../server
npm install
```

---

# ▶️ Run Project

## Start Backend

```bash
cd server
npm run dev
```

Backend:

```
http://localhost:5000
```

---

## Start Frontend

```bash
cd client
npm run dev
```

Frontend:

```
http://localhost:5173
```

---

# 🔑 Environment Variables

Create a `.env` file inside the `server` folder.

```env
PORT=5000

MONGO_URI=mongodb://127.0.0.1:27017/mern-ecommerce

JWT_SECRET=your_secret_key
```

---

# 📅 Development Roadmap

- [x] Project Setup
- [ ] MongoDB Connection
- [ ] Authentication
- [ ] Categories
- [ ] Brands
- [ ] Product CRUD
- [ ] Product Search
- [ ] Product Filter
- [ ] Wishlist
- [ ] Cart
- [ ] Coupon System
- [ ] Checkout
- [ ] Order Management
- [ ] bKash Integration
- [ ] Nagad Integration
- [ ] Rocket Integration
- [ ] Admin Dashboard
- [ ] Deployment

---

# 📌 API Status

| Module | Status |
|----------|--------|
| Authentication | ⏳ |
| Products | ⏳ |
| Categories | ⏳ |
| Brands | ⏳ |
| Cart | ⏳ |
| Wishlist | ⏳ |
| Orders | ⏳ |
| Payments | ⏳ |
| Coupons | ⏳ |

---

# 👨‍💻 Author

**Forhad Hossain**

GitHub: https://github.com/forhadhossainriy27-spec/

---

# 📄 License

This project is licensed under the MIT License.