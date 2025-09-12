# 🌸 Flower Delivery App (API)

This is the **server-side application** for the Flower Delivery App, implemented as a **middle-level test task for ELIFTECH**.  
The project is built with **Node.js**, **TypeScript**, and **Express**, using **MongoDB** as a database.

---

## 🚀 Features

- 🌐 REST API for product and order management
- 🗄 MongoDB database integration via **Mongoose**
- 🔄 CORS support for cross-origin requests
- ✅ TypeScript for type safety

---

## 🛠 Tech Stack

- **Runtime:** Node.js
- **Language:** TypeScript
- **Framework:** Express 5
- **Database:** MongoDB with Mongoose
- **Environment Variables:** dotenv
- **Code Quality:** ESLint + Prettier + Husky + lint-staged
- **Development:** ts-node + nodemon

---

## ⚙️ Scripts

| Command              | Description                           |
| -------------------- | ------------------------------------- |
| `npm run dev`        | Start development server with nodemon |
| `npm run build`      | Compile TypeScript to JavaScript      |
| `npm run start`      | Run production server from `dist`     |
| `npm run lint`       | Run ESLint with auto-fix              |
| `npm run lint:check` | Run ESLint without auto-fix           |
| `npm run type-check` | Run TypeScript type checking          |
| `npm run format`     | Format code with Prettier             |

---

## 🏗 Installation & Setup

Clone the repository:

```bash
git clone https://github.com/Sp1r1tual/flower-delivery-app-api
```

Install and run the app in development mode:

```bash
npm install           # installs server deps
npm run dev           # starts server
```

## 🌐 API Endpoints

The Flower Delivery API provides the following endpoints:

---

### **Health Check**

**GET /**

**Description:**  
Check if the API is running.

**Response:**

```json
{
  "message": "Flower Delivery API is running"
}
```

---

### **Shop Categories**

**GET /categories**

**Description:**  
Retrieve all available product categories.

**Response:**

```json
[
  {
    "_id": "64fa7f1e6f1d2c0012345678",
    "name": "Roses",
    "createdAt": "2025-09-10T00:00:00.000Z",
    "updatedAt": "2025-09-10T00:00:00.000Z"
  },
  {
    "_id": "64fa7f1e6f1d2c0012345679",
    "name": "Tulips",
    "createdAt": "2025-09-10T00:00:00.000Z",
    "updatedAt": "2025-09-10T00:00:00.000Z"
  }
]
```

---

### **All Shop Items**

**GET /shop**

**Description:**  
Retrieve all products in the shop with populated category information.

**Response:**

```json
[
  {
    "_id": "64fa8a2e6f1d2c0012345670",
    "name": "Red Rose",
    "price": 25,
    "category": {
      "_id": "64fa7f1e6f1d2c0012345678",
      "name": "Roses"
    },
    "itemImg": "https://example.com/red-rose.jpg",
    "createdAt": "2025-09-10T00:00:00.000Z",
    "updatedAt": "2025-09-10T00:00:00.000Z"
  }
]
```

### **Shop Items by Category**

**GET /shop/category/:categoryId**

**Description:**  
Retrieve products by specific category ID.

**Params:**

- `categoryId` (string) — MongoDB ObjectId of the category

**Response:**

```json
[
  {
    "_id": "64fa8a2e6f1d2c0012345670",
    "name": "Red Rose",
    "price": 25,
    "category": {
      "_id": "64fa7f1e6f1d2c0012345678",
      "name": "Roses"
    },
    "itemImg": "https://example.com/red-rose.jpg",
    "createdAt": "2025-09-10T00:00:00.000Z",
    "updatedAt": "2025-09-10T00:00:00.000Z"
  }
]
```

### **Get Order by Number**

**GET /order/:orderNumber**

**Description:**  
Retrieve a single order by its order number.

**Params:**

- `orderNumber` (number) — unique order number

**Response:**

```json
{
  "orderNumber": 1023,
  "userName": "John Doe",
  "email": "john@example.com",
  "phoneNumber": "+1234567890",
  "address": "123 Flower St, City",
  "items": [
    {
      "product": "64fa8a2e6f1d2c0012345670",
      "name": "Red Rose",
      "price": 25,
      "quantity": 2,
      "itemImg": "https://example.com/red-rose.jpg"
    }
  ],
  "totalPrice": 50
}
```

### **Checkout Cart**

**POST /cart/checkout**

**Description:**  
Create a new order from the user's cart.

**Request Body:**

```json
{
  "userName": "John Doe",
  "email": "john@example.com",
  "phoneNumber": "+1234567890",
  "address": "123 Flower St, City",
  "cart": [
    {
      "productId": "64fa8a2e6f1d2c0012345670",
      "quantity": 2
    }
  ]
}
```

**Response:**

```json
{
  "orderNumber": 1024
}
```
