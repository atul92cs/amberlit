const sequelize=require('sequelize');
const db=require('../config/database');
const Ads=db.define('Ads',{
    Date:{type:sequelize.STRING},
    Title:{type:sequelize.STRING},
    Content:{type:sequelize.STRING},
    Picture:{type:sequelize.STRING},
    Category:{type:sequelize.INTEGER},
    Subcategory:{type:sequelize.INTEGER},
    Userid:{type:sequelize.INTEGER},
    Status:{type:sequelize.STRING}
});

module.exports=Ads;