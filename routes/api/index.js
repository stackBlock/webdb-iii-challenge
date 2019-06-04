const express = require('express');
const router = express.Router();
const cohortsRoute = require('./cohorts.js');
const studentsRoute = require('./students.js');

router.use('/cohorts', cohortsRoute);
router.use('/students', studentsRoute);

module.exports = router;

