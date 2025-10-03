import { Request, Response } from "express";
import ideaService from "../service/ideas.service";
import { ErrorCodes } from "../utils/errors/error-codes";

export const getAllIdeas = async (req: Request, res: Response) => {
  try {
    const ideas = await ideaService.getAllIdeas();
    res.json(ideas);
  } catch (error) {
    res.status(500).json({ error: ErrorCodes.INTERNAL_SERVER_ERROR });
  }
};

export const updateIdeaVote = async (
  req: Request & { clientIp?: string },
  res: Response
) => {
  try {
    const { ideaId } = req.params;
    const ipAddress = req.clientIp;

    const idea = await ideaService.updateVote(+ideaId, ipAddress);
    res.json(idea);
  } catch (error: any) {
    if (
      error.message === ErrorCodes.VOTE_LIMIT_EXCEEDED ||
      error.message === ErrorCodes.ALREADY_VOTED_FOR_THIS_IDEA
    ) {
      return res.status(409).json({ error: error.message });
    }

    if (error.message === ErrorCodes.IDEA_NOT_FOUND) {
      return res.status(404).json({ error: error.message });
    }

    return res.status(500).json({ error: ErrorCodes.INTERNAL_SERVER_ERROR });
  }
};
