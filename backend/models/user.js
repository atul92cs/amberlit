const db=require('../config/database');
const sequelize=require('sequelize');
const User=db.define('Users',{
    Name:{type:sequelize.STRING},
    Email:{type:sequelize.STRING},
    Phone:{type:sequelize.INTEGER},
    Password:{type:sequelize.STRING}
});
module.exports=User;