const Rooms = require("../Database/Models/Rooms");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
exports.checkRoom = (req, res, next) => {

 
  Rooms.findOne({ where: { name: req.body.roomName } })
    .then((result) => {
      if (result == null) {
        res.send(false);
      } else {
        res.send(true);
      }
    })
    .catch((err) => {
      console.log(err.message);
    });
};

exports.createRoom = (req, res, next) => {
  const saltRounds = 10;

  bcrypt.genSalt(saltRounds, function (err, salt) {
    bcrypt.hash(req.body.password, salt, function (err, hash) {
      // Store hash in your password DB.

      Rooms.create({ name: req.body.name, password: hash })
        .then(() => {

          jwt.sign({roomName:req.body.name, password:req.body.password}, process.env.SECRET, (err, token)=>{

res.send({authStatus:!true, token:token});

          });
          
        })
        .catch((err) => {
          console.log(err.message);
          res.send({authStatus:!false});
        });
    });
  });
};
