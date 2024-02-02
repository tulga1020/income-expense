import userRouter from "./routes/userRouter.js";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT;
app.use(userRouter);
app.listen(port, () => console.log(`http://localhost:${port}`));
