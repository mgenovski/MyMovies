const https = require('https');
const router = require('express').Router();


router.get('/:movie', async (req, res) => {
    
    const movie = req.params.movie;

    https.get(`https://api.tvmaze.com/search/shows?q=${movie}`, (resp) => {
        let data = '';

        resp.on('data', (chunk) => {
          data += chunk;
        });

        resp.on('end', () => {
          res.json(JSON.parse(data));
        });

      }).on("error", (err) => {
        res.json("Error: " + err.message);
      });
});

module.exports = router;