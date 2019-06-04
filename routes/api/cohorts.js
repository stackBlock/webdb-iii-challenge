const express = require('express');
const router = express.Router();

const knex = require('knex');
const knexConfig = require('../../knexfile').development;
console.log(knexConfig);
const db = knex(knexConfig);


router.get('/', (req, res) => {
    db('cohorts').then(function (data) {
        res.json(data);
    })
})





module.exports = router;