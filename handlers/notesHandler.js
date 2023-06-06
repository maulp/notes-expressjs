const db = require('../db/connection');

// Menampilkan daftar catatan di halaman awal
const getNotes = (req, res) => {
  const sql = 'SELECT * FROM catatan';
  db.query(sql, (err, results) => {
    if (err) {
      throw err;
    }
    res.render('index', { catatan: results });
  });
};

module.exports = {
  getNotes,
};
