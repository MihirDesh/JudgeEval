import { Request, Response } from "express";
const express = require("express");

import { fetchJudge } from '../middleware/fetchJudge';

const router = express.Router();

import {
  getAllJudges,
  getSingleJudge,
  createJudge,
  updateJudge,
  deleteJudge,
} from "../controllers/judge";


router.route("/").post(createJudge).get(getAllJudges);
router.route("/:id").get(getSingleJudge).patch(updateJudge).delete(deleteJudge);

export default router;
