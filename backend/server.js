require('dotenv').config();
const express = require('express');
const cors = require('cors');
const pool = require('./db');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/workouts', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM workouts ORDER BY date DESC');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch workouts' });
  }
});

app.post('/workouts', async (req, res) => {
  const { exercise_name, date, sets, reps, intensity } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO workouts (exercise_name, date, sets, reps, intensity) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [exercise_name, date, sets, reps, intensity]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to add workout' });
  }
});

app.delete('/workouts/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM workouts WHERE id = $1', [id]);
    res.status(204).send();
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to delete workout' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
