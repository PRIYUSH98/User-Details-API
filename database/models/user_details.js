'use strict';
module.exports = (sequelize, DataTypes) => {
  const User_Details = sequelize.define('User_Details', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    uuid: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    profile_pic: DataTypes.STRING
  }, {});
  User_Details.associate = function(models) {
    // associations can be defined here
  };
  return User_Details;
};