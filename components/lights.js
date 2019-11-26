const express = require('express');
const db = require('../db');
const router = express.Router();

//  Return all lights status
router.get('/', (req, res) => { 
    db.query('SELECT * FROM lights').then(results => {
        res.json({ lights: results})
    })
    .catch(() => {
        res.sendStatus(500);
    })    
});

//  Return information of a single light
router.get('/:lightId', (req, res) => {
    console.log("test: " + req.params.lightId);
    db.query('SELECT * FROM lights where idLights = ?', [req.params.lightId])
    .then(results => {
        res.json(results);
    })
    .catch(error => {
        console.error(error);
        res.sendStatus(500);
    });
})

/* Update lightstatus
    Expects the following data format
    {
        lightstatus: string
    }
*/

router.post('/', (req, res) => {
    console.log("test: " + req.body.lightstatus);
    db.query('UPDATE lights SET lightStatus = ? WHERE idLights = 1', [req.body.lightstatus])
    .then(results => {
        console.log(results);
        res.sendStatus(201);
    })
    .catch(() => {
        res.sendStatus(500);
    });
    
});

module.exports = router;
