const router = require('express').Router();
const api = require('../services/favorites');
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

router.post('/', async (req, res) => {
    const movieId = req.body.movieId;
    const item = { movieId };

    try {
        const result = await api.add(item);
        res.status(201).json(result);
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

        if (!data) {
            res.status(400).json({ favorite: false });
        }

        res.status(200).json({ favorite: true });
    } catch (err) {
        console.error(err.message);
        const error = mapErrors(err);
        res.status(400).json({ message: error });
    }
});

router.delete('/:movieId', async (req, res) => {
    try {
        const itemId = req.params.movieId;
        await api.deleteById(itemId);
        res.status(204).end();
    } catch (err) {
        console.error(err.message);
        const error = mapErrors(err);
        res.status(400).json({ message: error });
    }
});

module.exports = router;