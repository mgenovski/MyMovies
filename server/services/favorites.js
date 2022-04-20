const Favorite = require('../models/Favorite');

async function getAll() {
    return Favorite.find({});
}

async function getOne(movieId) {
    return Favorite.find({ movieId: movieId});
}

async function add(item) {
    const result = new Favorite(item);
    await result.save();

    return result;
}

async function deleteById(movieId) {
    await Favorite.deleteOne({ movieId: movieId });
}

module.exports = {
    getAll,
    getOne,
    add,
    deleteById
};