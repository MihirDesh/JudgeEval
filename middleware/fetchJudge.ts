import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface DecodedToken {
  judge_id: string;
  // Add more properties as needed
}

const JWT_SECRET = "oursecret";

const fetchJudge = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.header("auth-token");

  if (!token) {
    return res.status(401).json({ message: "Token missing" });
  }

  try {
    const decodedToken = jwt.verify(token, JWT_SECRET) as DecodedToken;

    const { judge_id } = decodedToken;

    // Set the judge details in the request headers for further processing
    req.headers.judge_id = judge_id;

    // Proceed to the next middleware or route handler
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

export default fetchJudge;
