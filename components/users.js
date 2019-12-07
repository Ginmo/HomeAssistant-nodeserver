const express = require('express');
const db = require('../db');
const router = express.Router();

//  Return all users
router.get('/', (req, res) => { 
    db.query('SELECT * FROM users').then(results => {
        res.json({ users: results})
    })
    .catch(() => {
        res.sendStatus(500);
    })
});

//  Return information of a single user
router.get('/:userId', (req, res) => {
    db.query('SELECT * FROM users where idUsers = ?', [req.params.userId])
    .then(results => {
        res.json(results);
    })
    .catch(error => {
        console.error(error);
        res.sendStatus(500);
    });
})

/* Update user password
    Expects the following data format
    {
        newpassword: string
    }
*/
router.post('/', (req, res) => {

    db.query('UPDATE users SET password = ? WHERE idUser = 1', [req.body.newpassword])
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
