const Rooms = require("../Database/Models/Rooms")

const jwt = require('jsonwebtoken');
exports.auth = (req, res, next)=>{



  jwt.verify(req.body.token, process.env.SECRET,(err, decoded)=>{


    if(err){
        res.send(false);
    }else{

        next();
    }


  });




}