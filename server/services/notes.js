const Note = require('../models/Note');

async function getAll() {
    return Note.find({});
}

async function getOne(movieId) {
    return Note.findOne({ movieId: movieId });
}

async function add(item) {
    const result = new Note(item);
    await result.save();

    return result;
}

async function edit(item) {
    let result = await Note.findOne({ movieId: item.movieId });

    if (!result) {
       return await add(item);
    }
    
    result.text = item.text;
    await result.save();
    return result;

}

module.exports = {
    getAll,
    getOne,
    edit
};