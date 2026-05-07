export default function WorkoutList({ workouts, onDelete }) {
  async function handleDelete(id) {
    await fetch(`/workouts/${id}`, { method: 'DELETE' });
    onDelete();
  }

  return (
    <div className="table-card">
      <h2>Workout History</h2>
      {workouts.length === 0 ? (
        <p className="empty-msg">No workouts logged yet. Add one above!</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Exercise</th>
              <th>Date</th>
              <th>Sets</th>
              <th>Reps</th>
              <th>Intensity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {workouts.map((w) => (
              <tr key={w.id}>
                <td>{w.exercise_name}</td>
                <td>{w.date?.slice(0, 10)}</td>
                <td>{w.sets}</td>
                <td>{w.reps}</td>
                <td><span className="intensity-badge">{w.intensity}/10</span></td>
                <td>
                  <button className="btn-delete" onClick={() => handleDelete(w.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
