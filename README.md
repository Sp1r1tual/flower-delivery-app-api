# Flower Delivery App (API)

This is the **server-side application** for the Flower Delivery App. The project is built with **Express** and **TypeScript** using **MongoDB** as a database.

---

## Features

- 🛒 Shop – browse products and categories
- 🧺 Shopping Cart – add, remove, and update items
- 📦 Order Info – view order details and order status

---

## Tech Stack

- Express
- TypeScript
- MongoDB (via Mongoose)

---

## API Endpoints

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
    "updatedAt": "2025-09-10T00:00:00.000Z",
    "location": {
      "type": "Point",
      "coordinates": [30.5234, 50.4501]
    }
  }
]
```

---

### **All Shop Items**

**GET /shop**

**Description:**  
Retrieve all products in the shop with populated category information.

**Params:**

- `page` (number, optional, default: 1) — page number
- `limit` (number, optional, default: 10) — items per page

**Response:**

```json
{
  "items": [
    {
      "_id": "64fa8a2e6f1d2c0012345670",
      "name": "Red Rose",
      "price": 25,
      "category": {
        "_id": "64fa7f1e6f1d2c0012345678",
        "name": "Roses",
        "location": {
          "type": "Point",
          "coordinates": [30.5234, 50.4501]
        }
      },
      "imageUrl": "https://example.com/red-rose.jpg",
      "createdAt": "2025-09-10T00:00:00.000Z",
      "updatedAt": "2025-09-10T00:00:00.000Z"
    }
  ],
  "total": 42,
  "page": 2,
  "totalPages": 5
}
```

### **Shop Items by Category**

**GET /shop/category/:categoryId**

**Description:**  
Retrieve products by specific category ID.

**Params:**

- `categoryId` (string) — MongoDB ObjectId of the category
- `page` (number, optional, default: 1) — page number
- `limit` (number, optional, default: 10) — items per page

**Response:**

```json
{
  "items": [
    {
      "_id": "64fa8a2e6f1d2c0012345670",
      "name": "Red Rose",
      "price": 25,
      "category": {
        "_id": "64fa7f1e6f1d2c0012345678",
        "name": "Roses",
        "location": {
          "type": "Point",
          "coordinates": [30.5234, 50.4501]
        }
      },
      "imageUrl": "https://example.com/red-rose.jpg",
      "createdAt": "2025-09-10T00:00:00.000Z",
      "updatedAt": "2025-09-10T00:00:00.000Z"
    }
  ],
  "total": 18,
  "page": 1,
  "totalPages": 2
}
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
      "imageUrl": "https://example.com/red-rose.jpg"
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
