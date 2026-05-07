# GymMaxxing
A full-stack workout logging web app built with React.js, Express.js, and PostgreSQL. Track your exercise sessions with exercise name, date, sets, reps, and intensity.

---

## Prerequisites
Make sure you have these installed before starting:
- [Node.js](https://nodejs.org/) (v18 or higher)
- [PostgreSQL](https://www.postgresql.org/) (v14 or higher)
- A terminal / command prompt

---

## Step 1 — Clone the Repository
```bash
git clone https://github.com/OrangGilar/AA-MUhammadNaufalGilardino-2406450434-DBS10-Gymmaxxing.git
cd AA-MUhammadNaufalGilardino-2406450434-DBS10-Gymmaxxing
```

---

## Step 2 — Set Up the Database
Open **psql** and run:
```sql
CREATE DATABASE gymmaxxing;
\c gymmaxxing
\i C:/path/to/project/schema.sql
```
Replace `C:/path/to/project/` with the actual path where you cloned the repo.

---

## Step 3 — Configure Backend Environment
```bash
cd backend
copy .env.example .env
```
Open `.env` and fill in your PostgreSQL credentials:
```
DB_HOST=localhost
DB_PORT=5432
DB_NAME=gymmaxxing
DB_USER=postgres
DB_PASSWORD=your_password
PORT=5000
```

---

## Step 4 — Install Backend Dependencies
```bash
cd backend
npm install
```

---

## Step 5 — Install Frontend Dependencies
```bash
cd frontend
npm install
```

---

## Step 6 — Run the Backend
Open a terminal in the `backend` folder and run:
```bash
npm start
```
You should see:
```
Server running on port 5000
```

---

## Step 7 — Run the Frontend
Open a **second terminal** in the `frontend` folder and run:
```bash
npm run dev
```
You should see:
```
VITE ready on http://localhost:5173
```

---

## Step 8 — Open the App
Go to your browser and open:
```
http://localhost:5173
```

---

## API Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/workouts` | Fetch all workouts |
| POST | `/workouts` | Add a new workout |
| DELETE | `/workouts/:id` | Delete a workout by ID |

---

## Project Structure
```
├── schema.sql
├── backend/
│   ├── server.js
│   ├── db.js
│   ├── package.json
│   └── .env.example
└── frontend/
    ├── index.html
    ├── vite.config.js
    ├── package.json
    └── src/
        ├── App.jsx
        ├── App.css
        ├── main.jsx
        └── components/
            ├── WorkoutForm.jsx
            └── WorkoutList.jsx
```
