const express = require('express')
const aiController = require('../controllers/ai.controller')

const router = express.router()

router.get("/get-response", aiController.getResponse)


module.exports = router