const Messages = require("../Database/Models/Messages");
const jwt = require("jsonwebtoken");

exports.getMessages = (req, res, next) => {
  jwt.verify(req.body.token, process.env.SECRET, (err, decoded) => {
    if (err) {
      res.send(false);
    } else {
      Messages.findAll({ where: { roomname: decoded.roomName } })
        .then((messages) => {
          res.send(messages);
        })
        .catch((err) => {
          
          console.log(err.message);
        });
    }
  });
};



exports.saveMessage= (req, res, next)=>{


    jwt.verify(req.body.token, process.env.SECRET, (err, decoded) => {
        if (err) {
          res.send(false);
        } else {
          Messages.create({message:req.body.message, avatar:req.body.avatar, roomname:decoded.roomName, username:req.body.username})
            .then(() => {
              res.send(true);
            })
            .catch((err) => {
                res.send(false);
              console.log(err.message);
            });
        }
      });



}