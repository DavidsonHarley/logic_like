"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Idea extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Idea.hasMany(models.Vote, {
        foreignKey: "idea_id",
        onDelete: "CASCADE",
      });
    }
  }
  Idea.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      vote_count: DataTypes.NUMBER,
    },
    {
      sequelize,
      modelName: "Idea",
      indexes: [
        {
          fields: ["vote_count"],
        },
      ],
    }
  );
  return Idea;
};
