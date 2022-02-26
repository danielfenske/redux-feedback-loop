const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    console.log('GET /api/feedback');

    let queryText = 'SELECT * from "feedback";'
    
    pool.query(queryText)
        .then((result) => {
            res.send(result.rows);
        })
        .catch((error) => {
            console.log('error in GET /api/feedback', error);
            
            res.sendStatus(500);
        })
})

router.post('/', (req, res) => {
    console.log('POST /api/feedback', req.body);

    let queryText = 
        `INSERT INTO "feedback" 
        ("feeling", "understanding", "support", "comments", "flagged")
        VALUES ($1, $2, $3, $4, $5);`
    
    const values = [req.body.feeling, req.body.understanding, req.body.support, req.body.comments, req.body.flagged];

    pool.query(queryText, values)
        .then((res) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            res.sendStatus(500);
        })
})

module.exports = router;