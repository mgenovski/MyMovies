const router = require('express').Router();
const api = require('../services/ratings');
const mapErrors = require('../utils/mapper');

router.get('/', async (req, res) => {
    try {
        const data = await api.getAll();
        res.status(200).json(data);
    } catch (err) {
        console.error(err.message);
        const error = mapErrors(err);
        res.status(400).json({ message: error });
    }
});

router.get('/:movieId', async (req, res) => {
    try {
        const itemId = req.params.movieId;
        const data = await api.getOne(itemId);

        if(data.length === 0) {
            res.status(400).json({ message: 'not found' });
        }

        res.status(200).json(data);
    } catch (err) {
        console.error(err.message);
        const error = mapErrors(err);
        res.status(400).json({ message: error });
    }
});

router.post('/', async (req, res) => {
    const movieId = req.body.movieId;
    const rating = req.body.rating;
    const item = {
        movieId,
        rating
    };

    try {
        const result = await api.edit(item);
        res.status(201).json(result);
    } catch (err) {
        console.error(err.message);
        const error = mapErrors(err);
        res.status(400).json({ message: error });
    }
});

module.exports = router;