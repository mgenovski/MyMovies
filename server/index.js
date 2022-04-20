const express = require('express');
const mongoose = require('mongoose');

const cors = require('./middlewares/cors');
const searchController = require('./controllers/search');
const movieController = require('./controllers/movie');
const favoriteController = require('./controllers/favorites');
const noteController = require('./controllers/notes');
const ratingController = require('./controllers/ratings');

start();

async function start() {
    try {
        await mongoose.connect('mongodb://localhost:27017/movies', {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
        console.log('Database ready');
    } catch (err) {
        console.error('Database connection failed');
        process.exit(1);
    }

    const app = express();
    app.use(express.json());
    app.use(cors());
    app.use('/search', searchController);
    app.use('/movie', movieController);
    app.use('/favorites', favoriteController);
    app.use('/notes', noteController);
    app.use('/ratings', ratingController);

    app.get('/', (req, res) => res.json({ message: 'REST service operational'}));

    app.listen(3030, () => console.log('REST service started on port 3030'));
}