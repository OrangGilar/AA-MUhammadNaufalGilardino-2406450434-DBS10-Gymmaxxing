import { useState } from 'react';

const empty = { exercise_name: '', date: '', sets: '', reps: '', intensity: '' };

export default function WorkoutForm({ onAdd }) {
  const [form, setForm] = useState(empty);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await fetch('/workouts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        exercise_name: form.exercise_name,
        date: form.date,
        sets: Number(form.sets),
        reps: Number(form.reps),
        intensity: Number(form.intensity),
      }),
    });
    setForm(empty);
    onAdd();
  }

  return (
    <div className="form-card">
      <h2>Add Workout</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <input
            name="exercise_name"
            placeholder="Exercise name"
            value={form.exercise_name}
            onChange={handleChange}
            required
          />
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="sets"
            placeholder="Sets"
            min="1"
            value={form.sets}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="reps"
            placeholder="Reps"
            min="1"
            value={form.reps}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="intensity"
            placeholder="Intensity (1–10)"
            min="1"
            max="10"
            value={form.intensity}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn-add">Log Workout</button>
      </form>
    </div>
  );
}
