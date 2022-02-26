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
            
        })
})

module.exports = router;