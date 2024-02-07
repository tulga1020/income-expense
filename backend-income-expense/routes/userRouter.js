import express from "express";
import {
  loginController,
  createUsersController,
} from "../controller/userController.js";
import { authorization } from "../middleware/auth.js";
import { tokencheck } from "../middleware/tokencheck.js";

const userRouter = express.Router();

// create user
userRouter.post("/createUsers", createUsersController);
//login user
userRouter.post("/login", authorization, loginController);
export default userRouter;
