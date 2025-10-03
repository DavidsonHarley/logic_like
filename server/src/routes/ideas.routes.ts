import { Router } from "express";
import { getAllIdeas } from "../controllers/ideas.controllers";
import { updateIdeaVote } from "../controllers/ideas.controllers";

const router = Router();

router.get("/all", getAllIdeas);
router.put("/update/:ideaId", updateIdeaVote);

export default router;
