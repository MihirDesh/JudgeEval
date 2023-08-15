import express from "express";
import queryDatabase from "./database/connection";
import session from "express-session";
import passport from 'passport';
const app = express();
const port = process.env.PORT || 3000;

import JudgeRouter from "./routes/judge";
import TeamRouter from "./routes/teams";
import ParameterRouter from "./routes/parameters";

app.set('view engine', 'ejs'); // Set 'ejs' as the view engine


app.use(session({
  secret: 'your-session-secret',
  resave: false,
  saveUninitialized: true,
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());

//Routes

app.use("/api/v1/judge", JudgeRouter);
app.use("/api/v1/team", TeamRouter);
app.use("/api/v1/parameter", ParameterRouter);

const start = async () => {
  try {
    await queryDatabase("SELECT 1"); // A simple query to test the connection
    console.log("Database connected successfully");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
