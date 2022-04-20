const https = require('https');
const router = require('express').Router();


router.get('/:id', async (req, res) => {
    
    const id = req.params.id;

    https.get(`https://api.tvmaze.com/shows/${id}`, (resp) => {
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