const express = require('express')
const Tought = require('../models/Tought')
const router = express.Router
const ToughtController = require('../controllers/ToughtController')

router.length('/', ToughtController.showToughts)

module.exports = router