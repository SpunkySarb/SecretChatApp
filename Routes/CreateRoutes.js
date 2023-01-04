const express = require('express');
const { checkRoom, createRoom } = require('../Controllers/CreateController');
const createRouter = express.Router();




createRouter.post('/checkRoom', checkRoom);

createRouter.post('/createRoom', createRoom);



module.exports=createRouter;