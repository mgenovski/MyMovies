const { model, Schema } = require('mongoose');

const noteSchema = new Schema({
    movieId: { type: Number, min: [1, 'Must be at least 1'] },
    text: { type: String }
});

noteSchema.index({ movieId: [1, 'Movie note already added']}, {
    unique: true
});

const Note = model('Note', noteSchema);

module.exports = Note;