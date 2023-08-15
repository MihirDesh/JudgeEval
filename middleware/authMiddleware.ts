import { Request, Response } from "express";
const jwt = require("jsonwebtoken");
const JWT_SECRET = "oursecretkey";

export const fetchuser = (req:Request, res:Response, next: () => void) => {
  //get the user from the jwt token and id to req obj
  const token = req.header("auth-token");
  if (!token) {
    res.status(401).send({ error: "Please authenticate using a valid token" });
  }
  try {
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data.user;
    next();
  } catch (error) {
    res.status(401).send({ error: "Please authenticate using a valid token" });
  }
};

module.exports = fetchuser;