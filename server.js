const express = require('express');
const ejs = require('ejs');
const notesRouter = require('./routes/notes');
const notesHandler = require('./handlers/notesHandler');
const db = require('./db/connection');

const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));

// Menyambungkan router
app.use('/catatan', notesRouter);

// Menampilkan daftar catatan di halaman awal
app.get('/', notesHandler.getNotes);

app.use(express.static('public'));

// Menjalankan server
app.listen(3000, () => {
  console.log('Server berjalan pada http://localhost:3000');
});
