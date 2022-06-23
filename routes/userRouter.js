const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')

router.post('/regiter', userController.register)
router.post('/login', userController.login)

module.exports = router;

//aaqqaaqq
//mauricio
// mongodb+srv://mauricio:aaqqaaqq@cluster0.aiwzx.mongodb.net/?retryWrites=true&w=majority