const express = require('express');
const router = express.Router();
const db = require('../db/connection');

// Menambahkan catatan baru
router.post('/', (req, res) => {
  const { title, content } = req.body;
  const sql = 'INSERT INTO catatan (title, content) VALUES (?, ?)';
  db.query(sql, [title, content], (err) => {
    if (err) {
      throw err;
    }
    res.redirect('/');
  });
});

// Menghapus catatan berdasarkan ID
router.post('/hapus/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM catatan WHERE id = ?';
  db.query(sql, id, (err) => {
    if (err) {
      throw err;
    }
    res.redirect('/');
  });
});

module.exports = router;
