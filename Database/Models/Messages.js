const { DataTypes } = require("sequelize");
const db = require("../Connection");










const Messages = db.define('Messages',{



id:{
    type:DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true,
    allowNull:false
},
username:{
    type:DataTypes.STRING,
    allowNull:false
},
roomname:{
    type:DataTypes.TEXT('medium'),
    allowNull:false
},
message:{
    type:DataTypes.TEXT("long"),
    allowNull:false

},

avatar:{
    type:DataTypes.STRING,
    allowNull:false
}





});



module.exports = Messages;