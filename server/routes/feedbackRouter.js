const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// GET endpoint sends all items in feedback database to client when requested
router.get('/', (req, res) => {
    console.log('GET /api/feedback');

    let queryText = 'SELECT * from "feedback" ORDER BY "date" ASC;'
    
    pool.query(queryText)
        .then((result) => {
            res.send(result.rows);
        })
        .catch((error) => {
            console.log('error in GET /api/feedback', error);
            
            res.sendStatus(500);
        })
})

// POST endpoint inserts new feedback submission given from client
router.post('/', (req, res) => {
    console.log('POST /api/feedback', req.body);

    let queryText = 
        `INSERT INTO "feedback" 
        ("feeling", "understanding", "support", "comments", "flagged")
        VALUES ($1, $2, $3, $4, $5);`
    
    // sanitizing values
    const values = [req.body.feeling, req.body.understanding, req.body.support, req.body.comments, req.body.flagged];

    pool.query(queryText, values)
        .then((result) => {
            console.log('Added new item');
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log('Error adding new item', error);
            
            res.sendStatus(500);
        })
})

// PUT endpoint updates 'flagged' status when request to update is made from client
router.put('/:id', (req, res) => {
    console.log('PUT /api/feedback/:id', req.body);

    let flaggedStatus = req.body.flagged;
    let idToUpdate = req.params.id;

    let queryText =
    `UPDATE "feedback"
    SET flagged=$1 WHERE id=$2;`;

    const values = [flaggedStatus, idToUpdate];

    pool.query(queryText, values)
        .then((result) => {
            console.log('Updated submission');
            
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('Error updating submission', error);
            
            res.sendStatus(500);
        })  
})

module.exports = router;