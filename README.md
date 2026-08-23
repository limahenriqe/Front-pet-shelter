# 🐾 Pet Shelter Frontend

Frontend application for a Pet Shelter management system.

The application provides a user-friendly interface for viewing, registering, editing, and deleting pets by communicating with the Pet Shelter REST API.

## 🚀 Technologies

* React
* Vite
* JavaScript
* Axios
* React Router
* HTML
* CSS
* Yarn

## 📌 Features

* Home page
* View registered pets
* View pet details
* Add new pets
* Edit pet information
* Delete pets
* Navigation between pages
* Integration with REST API
* Responsive interface


## ⚙️ Installation

Clone the repository:

```bash
git clone <repository-url>
```

Enter the project directory:

```bash
cd front-pets
```

Install the dependencies:

```bash
yarn install
```

Start the development server:

```bash
yarn dev
```

Vite will display the local address in the terminal, usually:

```text
http://localhost:5173
```

## 🔗 Backend Integration

The frontend communicates with the Pet Shelter API using Axios.

The backend should be running at:

```text
http://localhost:3000
```

Example request:

```javascript
const response = await axios.get(
  "http://localhost:3000/pets"
)
```

## 🧭 Application Routes

| Route               | Page       | Description                      |
| ------------------- | ---------- | -------------------------------- |
| `/`                 | Home       | Application home page            |
| `/pets`             | Pet List   | Displays all registered pets     |
| `/pets/:petId`      | Pet Detail | Displays information about a pet |
| `/pets/:petId/edit` | Edit Pet   | Updates pet information          |
| `/add`              | Add Pet    | Registers a new pet              |

## 🔄 CRUD Integration

The frontend communicates with the API through the following operations:

```text
Pet List      → GET    /pets
Pet Detail    → GET    /pets/:id
Add Pet       → POST   /pets
Edit Pet      → PUT    /pets/:id
Delete Pet    → DELETE /pets/:id
```

## 📚 Purpose

This project was developed to practice React development, component organization, state management, routing, Axios HTTP requests, REST API integration, forms, and frontend/backend communication.

## 💻 Backend

This frontend was developed to work with the Pet Shelter REST API built with Node.js and Express.
