const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;

const movieRouter = require('./routes/movie.router');
const genreRouter = require('./routes/genre.router');

/** ---------- MIDDLEWARE ---------- **/
app.use(express.static('build'));

/** ---------- ROUTES ---------- **/
app.use('/movie', movieRouter);
app.use('/genre', genreRouter);

/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});