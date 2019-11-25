const express = require('express');
const db = require('../db');
const router = express.Router();

//  Return all dog information 
router.get('/', (req, res) => { 
    db.query('SELECT * FROM temperature').then(results => {
        res.json({ temperature: results})
    })
    .catch(() => {
        res.sendStatus(500);
    })    
});

//  Return information of a single dog 
router.get('/:dogId', (req, res) => {
    db.query('SELECT * FROM dogHouse where id = ?', [req.params.dogId])
    .then(results => {
        res.json(results);
    })
    .catch(error => {
        console.error(error);
        res.sendStatus(500);
    });
})

/* Create a new dog 
    Expects the following data format
    {
        name: string, 
        image: string - whole url to image
    }
*/
router.post('/test', (req, res) => {
	res.send('test!' + req.body));
});

router.post('/', (req, res) => {

    db.query('INSERT INTO dogHouse (name, image) VALUES (?,?)', [req.body.name, req.body.image])
    .then(results => {
        console.log(results);
        res.sendStatus(201);
    })
    .catch(() => {
        res.sendStatus(500);
    });
    
});

router.delete('/:dogId', (req, res) => {
    db.query('DELETE FROM dogHouse where id = ?', [req.params.dogId])
    .then(results => {
        res.sendStatus(200);
    })
    .catch(error => {
        console.error(error);
        res.sendStatus(500);
    });
})

module.exports = router;
