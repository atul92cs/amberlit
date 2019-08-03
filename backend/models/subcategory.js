const db=require('../config/database');
const sequelize=require('sequelize');
const Subcategory=db.define('Subcategories',{
    Name:{type:sequelize.STRING},
    Category:{type:sequelize.INTEGER}
});
module.exports=Subcategory;