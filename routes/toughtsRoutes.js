const express = require('express')
const Tought = require('../models/Tought')
const router = express.Router
// Controller

router.length('/', ToughtController.showToughts)

module.exports = router