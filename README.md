# 🔗 URL Shortener Service

A simple and efficient URL shortening service that allows users to convert long URLs into short, shareable links. Built with a modern full-stack architecture using **React**, **Node.js**, **Express.js**, and **MongoDB**.

---

## 🌐 Overview

This application enables users to:
- Generate a shortened version of any long URL.
- Optionally create custom aliases for the short URL.
- Redirect users to the original URL when the short version is accessed.
- View a list of previously shortened URLs.

The system is divided into:
- 🖥️ **Frontend**: Built with React, providing a responsive user interface.
- 🔧 **Backend**: Built with Node.js and Express.js, handling URL logic and database operations.
- 🗂️ **Database**: MongoDB is used to persist original URLs and their shortened counterparts.

---

## ✨ Features

✅ Shorten long URLs into small, unique links  
✅ Optionally add custom aliases to the short URLs  
✅ Redirect to the original URL when the short one is used  
✅ Store all URL mappings in MongoDB  
✅ View previously shortened URLs

---

## 🛠️ Technologies Used

| Layer      | Technology           |
|------------|----------------------|
| Frontend   | React                |
| Backend    | Node.js, Express.js  |
| Database   | MongoDB              |
| API Client | Axios                |

---

## 🚀 Getting Started

### 🔧 Prerequisites

- Node.js and npm installed
- MongoDB running locally or accessible via cloud URI (like MongoDB Atlas)

### ⚙️ Installation, Running, and Structure

```bash
# 1. Clone the repository
git clone https://github.com/your-username/url-shortener.git
cd url-shortener

# 2. Install backend dependencies and start the backend server
cd backend
npm install
npm start

# 3. Open a new terminal, install frontend dependencies and start the frontend
cd ../frontend
npm install
npm start
