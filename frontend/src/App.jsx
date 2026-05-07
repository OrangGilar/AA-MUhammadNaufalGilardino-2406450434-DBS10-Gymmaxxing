import { useState, useEffect } from 'react';
import WorkoutForm from './components/WorkoutForm';
import WorkoutList from './components/WorkoutList';

export default function App() {
  const [workouts, setWorkouts] = useState([]);
  const [error, setError] = useState(null);

  async function fetchWorkouts() {
    try {
      const res = await fetch('/workouts');
      if (!res.ok) throw new Error(`Server error: ${res.status}`);
      const data = await res.json();
      setWorkouts(data);
    } catch (err) {
      setError(err.message);
    }
  }

  useEffect(() => {
    fetchWorkouts();
  }, []);

  return (
    <>
      <header className="page-header">
        <h1>GymMaxxing</h1>
      </header>
      <div className="container">
        {error && <p className="error-msg">Could not connect to server: {error}</p>}
        <WorkoutForm onAdd={fetchWorkouts} />
        <WorkoutList workouts={workouts} onDelete={fetchWorkouts} />
      </div>
    </>
  );
}
