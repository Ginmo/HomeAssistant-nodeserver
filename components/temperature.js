const express = require('express');
const db = require('../db');
const router = express.Router();

//  Return all temperatures
router.get('/', (req, res) => { 
    db.query('SELECT * FROM temperature').then(results => {
        res.json({ temperature: results})
    })
    .catch(() => {
        res.sendStatus(500);
    })    
});

//  Return information of a single temperature
router.get('/:temperatureId', (req, res) => {
    db.query('SELECT * FROM temperature where idTemperature = ?', [req.params.temperatureId])
    .then(results => {
        res.json(results);
    })
    .catch(error => {
        console.error(error);
        res.sendStatus(500);
    });
})

/* Update temperature
    Expects the following data format
    {
        temperature: string
    }
*/

router.post('/', (req, res) => {
    db.query('UPDATE temperature SET currentTemperature = ? WHERE idTemperature = 1', [req.body.temperature])
    .then(results => {
        //console.log(results);
        res.sendStatus(201);
    })
    .catch(() => {
        res.sendStatus(500);
    });
    
});

module.exports = router;
