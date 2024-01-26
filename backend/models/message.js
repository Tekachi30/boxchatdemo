'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class message extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      message.belongsTo(models.user, { foreignKey: 'receiver_id' });
      message.belongsTo(models.user, { foreignKey: 'sender_id' });
    }
  }
  message.init({
    message_content: DataTypes.STRING,
    user_send: DataTypes.INTEGER,
    user_receive: DataTypes.INTEGER,
    deleted: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'message',
  });
  return message;
};