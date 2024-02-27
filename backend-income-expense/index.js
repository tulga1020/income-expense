import userRouter from "./routes/userRouter.js";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
// const pg = require("pg");
import pg from "pg";
const CONNECTION_STRING =
  "postgresql://tulga1020:i25QwHGWYjIE@ep-sparkling-star-a1olf7vj.ap-southeast-1.aws.neon.tech/leap1d?sslmode=require";

dotenv.config();
const app = express();
app.use(express.json());
app.use(userRouter);
const port = process.env.PORT;
export const client = new pg.Client({
  connectionString: CONNECTION_STRING,
});
const dbInit = async () => {
  await client.connect();
  await createUserTable();
};
dbInit();

const createUserTable = async () => {
  const userTableCreateQuery = `CREATE TABLE IF NOT EXISTS users(
    id SERIAL PRIMARY KEY, username TEXT NOT NULL, email TEXT NOT NULL, password TEXT NOT NULL, age SMALLINT
  )`;
  const result = await client.query(userTableCreateQuery);
  console.log(result);
  client.end();
};

app.use(cors());
app.get("", async (req, res) => {
  res.send("working");
});
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});

// app.listen(port, () => console.log(`http://localhost:${port}`));
