# Lazy-Bunny-Back-End 🐰

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)

**Lazy-Bunny-Back-End** is a robust server-side application developed
using Node.js and TypeScript. It serves as the backend API, handling
database operations, authentication, and business logic.

---

## 🚀 Tech Stack

- **Runtime:** Node.js
- **Language:** TypeScript
- **ORM:** Prisma
- **Database:** SQL (SQLite - configured via environment)
- **Package Manager:** npm

---

## 📂 Project Structure

```text
Lazy-Bunny-Back-End/
├── src/
│   ├── client/
│   ├── config/
│   ├── GenresApp/
│   ├── middlewares/
│   ├── MoviesApp/
│   ├── types/
│   ├── UserApp/
│   └── index.ts
├── static/
│   ├── img/
├── prisma/
├── package.json
├── tsconfig.json
└── .env
```

---

## 🛠 Getting Started

## Prerequisites

- Node.js (LTS)
- npm or yarn

---

## Installation

```bash
git clone <repository-url>
cd Lazy-Bunny-Back-End
```

---

# ⚙️ Install dependencies

```bash
npm install
```

---

# 🌱 Environment Configuration

Create a `.env` file:

### Example `.env`:

    PORT=3000

SQLite:

    "file:../../db/Database.db"

---

# 🗄 Database Setup

```bash
npm run prisma:migrate
npx run prisma generate
```

---

# ▶️ Running the Server

## Development Mode

```bash
npm run start
```

## Production

```bash
npm run build
npm start
```

---

# 📡 API Endpoints

Base URL:

    http://localhost:3000

## 👤 Users (/users)

| Method | Endpoint     | Description                           |
| ------ | ------------ | ------------------------------------- |
| POST   | /reg         | Register a new user                   |
| POST   | /login       | Login user                            |
| GET    | /            | Get all users                         |
| GET    | /me          | Get information about user from token |
| PUT    | /:id         | Update user by id                     |
| DELETE | /:id         | Delete user by id                     |
| GET    | /:id         | Get user by id                        |
| DELETE | /comment/:id | Delete user's comment by id           |
| PUT    | /fav/:id     | Update user's favorite film by id     |

## 📝 Movies (/movies)

| Method | Endpoint   | Description             |
| ------ | ---------- | ----------------------- |
| GET    | /          | Get all movies          |
| GET    | /:id       | Get movie by id         |
| GET    | /actor/:id | Get movie's actor by id |
| POST   | /create    | Create movie            |
| POST   | /:id       | Create comment          |
| PUT    | /:id       | Update movie by id      |
| DELETE | /:id       | Delete movie by id      |

## 🖼️ Genres (/genres)

| Method | Endpoint | Description        |
| ------ | -------- | ------------------ |
| GET    | /        | Get all genres     |
| POST   | /        | Create genre       |
| PUT    | /:id     | Update genre by id |
| DELETE | /:id     | Delete genre by id |

---

# 📜 NPM Scripts

| Command                | Description            |
| ---------------------- | ---------------------- |
| npm run start          | Run project            |
| npm run prisma:format  | Format prisma's models |
| npm run prisma:migrate | Run migrations         |
| npm run prisma:seed    | Run seeds              |
