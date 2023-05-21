const models = require("../database/models");
const { v4: uuidv4 } = require('uuid');

async function create(user) {
  const uuid = uuidv4();
  user.uuid = uuid
  return await models.User_Details.build(user).save();
}


async function getAllUsers() {
  return await models.User_Details.findAll({}).then((result) => {
    return result;
  });
}

module.exports = {
  create,
  getAllUsers
};
