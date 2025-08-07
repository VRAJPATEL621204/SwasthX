## 🩺 Project Overview

**SwasthX** is a smart health-tech dashboard made under the **AarogyaID** project. It helps keep track of document executions and reviews in a clean, fast, and easy way – perfect for healthcare and diagnostics systems.

This dashboard gives a smooth UI along with strong backend support. It's a full-stack project built to handle real-time monitoring of different types of document statuses.

---

### ✨ What makes it cool:

- 🔄 **Nice UI with animations** – The home page has smooth arrow animations and a modern look. Super user-friendly and looks fresh.

- 📄 **Monitor Page** – Here you can see all the executions with full details like:
  - Execution ID
  - File Name and File Type
  - Start and End Time
  - Review Status
  - Environment (dev or prod)

- 📊 **Live Status Cards** – At the top of the monitor page, it shows counts of Pending, Completed, and Rejected documents in real-time.

- 🖱️ **Minimal Sidebar** – Simple icon-based sidebar that looks clean. Profile image at the bottom too.

- ♻️ **Auto Refresh & Timestamp** – You can refresh the data manually and also see the last time it got updated.

---

## 🧰 Tech Stack Used

### 🔹 Frontend
- React.js
- Tailwind CSS
- React Icons
- React Router DOM

### 🔸 Backend
- Node.js + Express.js
- MongoDB + Mongoose
- dotenv (for env variables)
- CORS + Express middlewares

---

## 🚀 Features

- 🏠 A really **good-looking animated Home Page** with cool transitions and arrows
- ➡️ **Arrow animations** that guide the user through the homepage visually
- 🖥️ A **monitor page** where all documents are listed with full status
- 📋 **Table with pagination** – See document details neatly
- 🔁 **Live refresh system** that shows the last updated time
- 🔍 **Individual document view** – You can see all the fields in a key-value format
- Backend is built with proper REST APIs and MongoDB storage

---

## Live Demo

👉 [View Live on Vercel ( Frontend Deployment )](https://swasth-x.vercel.app/)

👉 [Backend Deployment](https://swasthx-dy9y.onrender.com)


## 📂 Project Folder Structure

```
SwasthX/
├── backend/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── .env
│ ├── index.js
│ ├── package.json
│ ├── package-lock.json
├── Frontend/
│ ├── public/
│ │ └── logo.png
│ ├── src/
│ │ ├── assets/
│ │ ├── components/
│ │ └── pages/
│ │ ├── Home.jsx
│ │ ├── Monitor.jsx
│ │ └── DocumentDetails.jsx
│ ├── App.jsx
│ ├── main.jsx
│ ├── index.css
│ ├── .env
│ ├── package.json
│ ├── vite.config.js
│ ├── tailwind.config.js
│ └── vercel.json
└── README.md
```

### End-points and its Description

| Method | Endpoint             | Description                  |
| ------ | -------------------- | ---------------------------- |
| GET    | `/api/documents`     | Get all documents            |
| GET    | `/api/documents/:id` | Get single document by ID    |
| GET    | `/api/health`        | Health check for the backend |


## ⚙️ Setup Instructions


Clone the Repository

bash
```
git clone https://github.com/your-username/swasthx.git
cd swasthx
```
🔧 Backend Setup (Port: 5000)

bash -->
```
cd backend
npm install
```
➕ Create .env file in backend:

env -->
```
MONGO_URI=your-mongo-uri
PORT=5000
```
▶️ Start Backend Server:

bash -->
```
node index.js
```

🎨 Frontend Setup (Port: 5173)

bash -->
```
cd Frontend
npm install
```

➕ Create .env file in frontend:

env -->
```
VITE_API_URL=https://swasthx-dy9y.onrender.com
```

▶️ Start Frontend Dev Server:

bash -->
```
npm run dev
```


## My Approach

I followed a clear and effective approach for building **SwasthX**. The main idea was to create a full-stack dashboard that looks modern, runs smoothly, and can help manage health document executions in real time.

I kept the project structure modular and layered:

### Frontend

The frontend is built using **React** and **Tailwind CSS**. I created reusable components like `StatusCard`, `Monitor`, and `DocumentDetails` to keep the code organized and easy to manage. For visual flow, I used **SVG paths with animateMotion** to create custom arrow animations that guide the user.

### Backend

For the backend, I used **Node.js**, **Express**, and **MongoDB**. I built REST APIs to fetch and manage document data:

- `GET /api/documents` – fetches all documents
- `GET /api/documents/:id` – fetches one document’s details
- `GET /api/health` – simple health check endpoint

The backend stores data like execution ID, file name, file type, environment (dev or prod), review status, and key-value fields with confidence percentages.

### Deployment

- The frontend is deployed on **Vercel**
- The backend is deployed on **Render**

### Challenges Faced

- I ran into **CORS errors**, which I fixed by adding proper middleware configuration on the backend.
- **Route-based deployment issues** on Vercel were solved by creating a `vercel.json` file to handle frontend routes correctly.
- I noticed slight **animation delays**, which might be due to hydration timing or how Vercel handles initial rendering.

This project is lightweight, visually clean, and backed by a solid full-stack system that can be useful for real-world healthcare tech projects like **AarogyaID**.


## Made by VRAJ PATEL - Aarogya ID Internship Round Project.



