const mysql = require('mysql');

// Membuat koneksi database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'admin', // Ganti dengan kata sandi MySQL Anda
  database: 'catatan_pribadi',
});

// Membuka koneksi database
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Terhubung ke database MySQL');
});

module.exports = db;
