const Rating = require('../models/Rating');

async function getAll() {
    return Rating.find({});
}

async function getOne(movieId) {
    return Rating.findOne({ movieId: movieId });
}

async function add(item) {
    const result = new Rating(item);
    await result.save();

    return result;
}

async function edit(item) {
    let result = await Rating.findOne({ movieId: item.movieId });

    if (!result) {
       return await add(item);
    }
    
    result.rating = item.rating;
    await result.save();
    return result;

}

async function deleteById(movieId) {
    await Rating.deleteOne({ movieId: movieId });
}

module.exports = {
    getAll,
    getOne,
    edit,
    deleteById
};