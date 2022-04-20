const { model, Schema } = require('mongoose');

const ratingSchema = new Schema({
    movieId: { type: Number, min: [1, 'Must be at least 1'] },
    rating: { type: Number, min: [1, 'Must be at least 1'], max: [5, 'Must be at most 5'] }
});

const Rating = model('Rating', ratingSchema);

module.exports = Rating;