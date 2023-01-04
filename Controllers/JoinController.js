const Rooms = require("../Database/Models/Rooms");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');












exports.joinRoom = (req, res, next) => {
  Rooms.findOne({ where: { name: req.body.name } })
    .then((result) => {
      if (result != null) {
        const hash = result.password;

        bcrypt.compare(req.body.password, hash, (err, result) => {

         
          
          if(err){
            res.send(false);
          }else if(result){

            jwt.sign({roomName:req.body.name, password:req.body.password}, process.env.SECRET, (err, token)=>{

              if(err){
                res.send(false);
              }else{

                res.send(token);
              }

              
            })


          }else{
            res.send(false)
          }

          
        });
      } else {
        res.send(false);
      }
    })
    .catch((err) => {
      console.log(err.message);
    });
};
