CREATE TABLE workouts (
  id SERIAL PRIMARY KEY,
  exercise_name TEXT NOT NULL,
  date DATE NOT NULL,
  sets INTEGER NOT NULL,
  reps INTEGER NOT NULL,
  intensity INTEGER NOT NULL CHECK (intensity BETWEEN 1 AND 10)
);
