function mapErrors(err) {
    if (Array.isArray(err)) {
        return err.join('\n');
    } else if (err.name == 'ValidationError') {
        return Object.values(err.errors).map(e => e.message).join('\n');
    } else if (err.code == 11000) {
        return 'Movie already added to favourites'; 
    }else if (typeof err.message == 'string') {
        return err.message;
    } else {
        return 'Request error';
    }
}

module.exports = mapErrors;