## Mini Project: React (Vite) + Express + MongoDB

This project is a simple full‑stack app where a user fills a registration form on the frontend (React), and the data is saved to MongoDB via a backend API (Express + Mongoose).

### What you will learn
- **How the folders are organized** and what each file does
- **What each dependency is for** (step by step, beginner‑friendly)
- **How to set up and run** the backend and frontend locally
- **How the API works** and how the frontend talks to it

---

## 1) Folder structure

```
Mini_Project/
  Backend/
    Index.js           # Express server: routes, MongoDB connection
    Model/
      info.js          # Mongoose schema/model for registrations
    package.json       # Backend dependencies (express, mongoose, cors)
  Frontend/
    src/
      App.jsx          # React form sending data to the backend
      App.css          # Styling for the form
      main.jsx         # React entry point
    index.html         # App root
    package.json       # Frontend deps (react, react-dom, axios, vite)
```

---

## 2) Prerequisites

- Node.js and npm installed. Download from the official Node.js site.
- MongoDB running locally on your machine. Install and start MongoDB; ensure it listens on `mongodb://localhost:27017`.
- (Windows) Optionally install **MongoDB Compass** to visually explore your data.

Helpful links:
- [Node.js downloads](https://nodejs.org/)
- [MongoDB Community Server](https://www.mongodb.com/try/download/community)
- [MongoDB Compass](https://www.mongodb.com/products/compass)

---

## 3) Quick start (run everything)

Open two terminals (one for backend, one for frontend):

1) Install dependencies

```bash
cd /Users/sagarpatil/Desktop/Hyperveda/Mini_Project/Backend && npm install
cd /Users/sagarpatil/Desktop/Hyperveda/Mini_Project/Frontend && npm install
```

2) Start MongoDB (if not already running)

- Windows
  - Start via Services app: Open Start → type "Services" → find "MongoDB" (or "MongoDB Server") → Right‑click → Start
  - Or via PowerShell (run as Administrator):
    ```powershell
    # One of these will work depending on service name
    Start-Service -Name "MongoDB"
    # or
    Start-Service -Name "MongoDB Server"
    ```
  - Or via Command Prompt (Admin):
    ```bat
    net start MongoDB
    ```

- macOS with Homebrew:
  ```bash
  brew services start mongodb-community
  ```

3) Start the backend API (port 8000)

```bash
cd /Users/sagarpatil/Desktop/Hyperveda/Mini_Project/Backend
node Index.js
```

You should see: `Server is running...`

4) Start the frontend (Vite dev server)

```bash
cd /Users/sagarpatil/Desktop/Hyperveda/Mini_Project/Frontend
npm run dev
```

Open the URL shown by Vite (usually `http://localhost:5173`). Fill the form and click Submit.

---

## 4) Windows + MongoDB Compass guide (beginner friendly)

If you’re on Windows and prefer a GUI to verify your data:

1) Install MongoDB Community Server and MongoDB Compass from the official site.
2) Start MongoDB service (see instructions above).
3) Open MongoDB Compass.
4) In the connection screen, set the connection string to:
   ```
   mongodb://localhost:27017
   ```
   Click "Connect".
5) After connecting, you’ll see the list of databases. You can either:
   - Let the app create the database automatically when you submit the form, or
   - Manually create it now for visibility: Click "Create database", use Database name: `register`, Collection name: `infos` → Create.
6) Submit the form in the React app. Then, in Compass, open the `register` database → `infos` collection to see the inserted document.

Tips:
- If Compass cannot connect, ensure the MongoDB service is running and that no firewall is blocking `localhost:27017`.
- The collection may not appear until the first insert happens. If you don’t see `infos` yet, submit the form once and refresh Compass.

---

## 4) Backend explained (Express + Mongoose)

Location: `Backend/Index.js`

What it does step by step:
- Imports libraries: `express` (web server), `mongoose` (MongoDB ODM), `cors` (allow frontend to call the API), and the `Info` model.
- Creates an Express app and enables JSON parsing and CORS.
- Connects to MongoDB database named `register` at `mongodb://localhost:27017/register`.
- Exposes two routes:
  - `POST /data` — saves one registration document to MongoDB
  - `GET /admin` — returns all saved registrations
- Starts listening on port `8000`.

Routes in detail:
- `POST /data`
  - Reads JSON from the request body (e.g., `{ name, branch, mobile, email }`).
  - Calls `Info.create(req.body)` to insert into MongoDB.
  - Responds with the inserted document or an error status.

- `GET /admin`
  - Calls `Info.find()` to fetch all documents from the `infos` collection.
  - Responds with an array of documents or an error status.

Location: `Backend/Model/info.js`

- Defines a simple Mongoose schema with four string fields: `name`, `branch`, `mobile`, `email`.
- Creates a model named `Info` bound to that schema and exports it.

### Backend dependencies (what and why)

- **express**: HTTP server and routing (`app.get`, `app.post`).
- **mongoose**: Connects to MongoDB and defines models/schemas.
- **cors**: Allows the React frontend (different origin/port) to call the backend without CORS errors.
- **axios**: Present in `Backend/package.json` but not used by the backend code. It’s typically used to make HTTP requests; here the frontend already uses axios. You can remove it from backend if you want to keep things minimal.

---

## 5) Frontend explained (React + Vite)

Location: `Frontend/src/App.jsx`

What it does step by step:
- Imports React, CSS, and `axios` for HTTP requests.
- Uses `useState` to track the four input fields: `name`, `branch`, `mobile`, `email`.
- Renders a styled form (`App.css`).
- On submit:
  - Prevents default browser form submission.
  - Sends a POST request to `http://localhost:8000/data` with the form data.
  - Logs success or error to the console.

Styling: `Frontend/src/App.css` provides the gradient background and form styling.

Entry: `Frontend/src/main.jsx` mounts the `App` component into `#root` in `Frontend/index.html`.

### Frontend dependencies (what and why)

- **react**: UI library for building components.
- **react-dom**: Connects React to the browser DOM.
- **axios**: Makes HTTP requests to the backend.
- **vite** (dev dependency): Fast development server and build tool for React apps.
- **@vitejs/plugin-react** (dev): React plugin for Vite.
- **eslint** and related plugins (dev): Linting tooling to catch common mistakes.

---

## 6) How the pieces talk to each other

1) The user fills the form in the React app and clicks Submit.
2) `axios.post('http://localhost:8000/data', { name, branch, mobile, email })` sends the data to the backend.
3) The Express backend receives the request, and `Info.create` writes it into MongoDB.
4) If you visit `http://localhost:8000/admin` (in a browser or via curl/Postman), you’ll see all saved registrations as JSON.

Example to view all data via terminal:

```bash
curl http://localhost:8000/admin
```

---

## 7) Common issues and fixes

- "MongoNetworkError" or connection refused
  - Ensure MongoDB is running and accessible at `mongodb://localhost:27017`.
  - Confirm firewall/security software isn’t blocking local connections.

- CORS error in the browser console
  - The backend enables CORS globally via `app.use(cors())`. Make sure the backend is running before the frontend tries to call it.

- Port already in use
  - If port 8000 is busy, stop the other process or change the port in `Backend/Index.js`.

---

## 8) Optional improvements (next steps)

- Add form validation on the frontend (e.g., email format, mobile number).
- Show success/error messages in the UI instead of just `console.log`.
- Create a simple admin page on the frontend to list data from `/admin`.
- Move the MongoDB connection string to an environment variable (e.g., `.env`).
- Add scripts to `Backend/package.json` like `"start": "node Index.js"` for convenience.

---

## 9) Summary

- Frontend (React + Vite) collects user input and sends it with Axios.
- Backend (Express + Mongoose) receives data and saves it to MongoDB.
- Two main API routes: `POST /data` to create, `GET /admin` to read.
- CORS is enabled so the browser can call the backend from a different port.


