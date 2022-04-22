const router = require('express').Router();
const api = require('../services/notes');
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

        if(!data) {
            return res.status(200).json({ message: 'not found' });
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
    const text = req.body.text;
    const item = {
        movieId,
        text
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