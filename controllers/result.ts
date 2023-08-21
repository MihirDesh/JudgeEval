import * as dotenv from "dotenv";
dotenv.config(); // Load environment variables from .env file
import { Request, Response } from "express";
import queryDatabase from "../database/connection";

export const getOverallResult = async (req: Request, res: Response) => {
  const { competition_id } = req.headers;

  const getOverallResultQuery = `
    SELECT
    sub.team_id,
    sub.competition_id,
    sub.team_name,
    AVG(sub.avg_parameter_score) AS final_avg_score
    FROM (
    SELECT
        t.team_id,
        t.team_name,
        AVG(s.score_value) AS avg_parameter_score
    FROM teams t
    JOIN scores s ON t.team_id = s.team_id
    JOIN parameters p ON s.parameter_id = p.parameter_id
    WHERE t.competition_id = $1
    GROUP BY t.team_id, t.team_name, p.parameter_name
    ) AS sub
    GROUP BY sub.team_id, sub.team_name
    ORDER BY sub.team_id;
    `;

  let retrieveResults = await queryDatabase(getOverallResultQuery, [
    competition_id,
  ]);
};
