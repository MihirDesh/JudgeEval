import { Request, Response } from "express";
const express = require("express");

import { fetchuser } from '../middleware/authMiddleware';

const router = express.Router();

import {
  getAllJudges,
  getSingleJudge,
  createJudge,
  updateJudge,
  deleteJudge,
} from "../controllers/judge";


// Route to display the login form
router.get('/login', (req : Request, res : Response) => {
  res.sendFile('login.html', { root: 'views' });
});

router.route("/").post(createJudge).get(getAllJudges);
router.route("/:id").get(getSingleJudge).patch(updateJudge).delete(deleteJudge);

export default router;
