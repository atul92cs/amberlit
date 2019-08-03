const db=require('../config/database');
const sequelize=require('sequelize');
const Category=db.define('Categorires',{
    Name:{type:sequelize.STRING}
});
module.exports=Category;