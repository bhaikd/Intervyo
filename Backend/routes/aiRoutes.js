import express from "express";
const router = express.Router();
import {
  generateQuestions,
  evaluateCandidateAnswer,
  getNextQuestion,
  completeInterview,
} from "../controllers/aiController.js";
import { authenticate } from "../middlewares/auth.js";
import interviewController from "../controllers/Interview.controller.js";
const { getResults } = interviewController;
// All routes are protected
// router.use(protect);

router.post("/generate-questions", generateQuestions);
router.post("/evaluate-answer", evaluateCandidateAnswer);
router.post("/next-question", getNextQuestion);
router.post("/complete-interview", authenticate, completeInterview);
router.get("/:interviewId/results", authenticate, getResults);

export default router;
