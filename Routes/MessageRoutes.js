const express = require('express');
const { getMessages, saveMessage } = require('../Controllers/MessageController');
const { auth } = require('./Auth');


const messageRouter = express.Router();


messageRouter.post('/getMessages',auth ,getMessages);


messageRouter.post('/saveMessage',auth ,saveMessage);



module.exports = messageRouter;