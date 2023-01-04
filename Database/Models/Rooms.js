const { DataTypes } = require("sequelize");
const db = require("../Connection");










const Rooms = db.define('Rooms',{




name:{
    type:DataTypes.STRING,
    allowNull:false,
    primaryKey:true
},
password:{
    type:DataTypes.TEXT("long"),
    allowNull:false

}





});



module.exports = Rooms;