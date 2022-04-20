const { model, Schema } = require('mongoose');

const favoriteSchema = new Schema({
    movieId: { type: Number, min: [1, 'Must be at least 1'], index: {unique: true, dropDups: true} },
    imgUrl: { type: String, default: 'https://fanart369.com/wp-content/themes/barberry/images/placeholder.jpg'}
});

favoriteSchema.index({ movieId: [1, 'Movie already added to favorites']}, {
    unique: true
});

const Favorite = model('Favourite', favoriteSchema);

module.exports = Favorite;