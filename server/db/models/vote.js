"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Vote extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Vote.belongsTo(models.Idea, {
        foreignKey: "idea_id",
        onDelete: "CASCADE",
      });
    }
  }
  Vote.init(
    {
      idea_id: DataTypes.NUMBER,
      ip_address: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Vote",
      indexes: [
        {
          unique: true,
          fields: ["idea_id", "ip_address"],
        },
        {
          fields: ["ip_address"],
        },
      ],
    }
  );
  return Vote;
};
