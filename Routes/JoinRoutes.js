const express = require('express');
const { joinRoom } = require('../Controllers/JoinController');

const joinRouter = express.Router();



joinRouter.post('/joinRoom', joinRoom);





module.exports = joinRouter;