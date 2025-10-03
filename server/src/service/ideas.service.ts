import { Transaction } from "sequelize";
import { ErrorCodes } from "../utils/errors/error-codes";

const { Idea, Vote, sequelize } = require("../../db/models");

const ideaService = {
  getAllIdeas: () => {
    return Idea.findAll({
      order: [["vote_count", "DESC"]],
    });
  },
  updateVote: async (ideaId?: number, ipAddress?: string) => {
    return await sequelize.transaction(async (t: Transaction) => {
      const idea = await Idea.findOne({
        where: { id: ideaId },
        transaction: t,
      });
      if (!idea) {
        throw new Error(ErrorCodes.IDEA_NOT_FOUND);
      }
      const voteCount = await Vote.count({
        where: { ip_address: ipAddress },
        transaction: t,
      });
      if (voteCount >= 10) {
        throw new Error(ErrorCodes.VOTE_LIMIT_EXCEEDED);
      }
      const existingVote = await Vote.findOne({
        where: { idea_id: ideaId, ip_address: ipAddress },
        transaction: t,
      });
      if (existingVote) {
        throw new Error(ErrorCodes.ALREADY_VOTED_FOR_THIS_IDEA);
      }

      await Idea.increment("vote_count", {
        where: { id: ideaId },
        transaction: t,
      });
      await Vote.create(
        { idea_id: ideaId, ip_address: ipAddress },
        { transaction: t }
      );

      return Idea.findOne({ where: { id: ideaId }, transaction: t });
    });
  },
};

export default ideaService;
