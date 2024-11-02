const express = require('express')
const cors = require('cors')
const mysql = require('mysql2')

const app = express()

app.listen(5500, () => console.log('Rodando na porta 5500'))

app.use(cors())

app.use(express.json())

const db = mysql.createConnection({
  host: '172.17.0.2',
  user: 'root',
  password: 'root',
  database: 'frontCrudApi'
});

db.connect(err => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to the database.');
});

app.route('/api').get((req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

app.route('/api/:id').get((req, res) => {
  const userId = req.params.id;

  db.query('SELECT * FROM users WHERE id = ?', [userId], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (results.length === 0) {
      return res.status(404).json('User not found!');
    }
    res.json(results[0]);
  });
});

app.route('/api').post((req, res) => {
  const { name, avatar, city } = req.body;

  db.query('INSERT INTO users (name, avatar, city) VALUES (?, ?, ?)', [name, avatar, city], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ id: results.insertId, name, avatar, city });
  });
});

app.route('/api/:id').put((req, res) => {
  const userId = req.params.id;
  const { name, avatar, city } = req.body;

  db.query('UPDATE users SET name = ?, avatar = ?, city = ? WHERE id = ?', [name, avatar, city, userId], (err) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json('Updated user');
  });
});

app.route('/api/:id').delete((req, res) => {
  const userId = req.params.id;

  db.query('DELETE FROM users WHERE id = ?', [userId], (err) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json('Deleted User');
  });
});
