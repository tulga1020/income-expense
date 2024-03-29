import { login } from "../queries/users/login-user.js";
import { createUsers } from "../queries/users/create-user.js";
import jwt from "jsonwebtoken";
export const loginController = async (req, res) => {
  try {
    const user = await login(req);
    const accesstoken = jwt.sign(
      { email: req.body.email },
      process.env.JWT_SECRET || "defaultSecret",
      { expiresIn: "1d" }
    );
    res.send({ user, accesstoken });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
export const createUsersController = async (req, res) => {
  try {
    const newuser = await createUsers(req);
    res.status(200).send(newuser);
  } catch (error) {
    console.log(error.message);
    res.status(400).send(error.message);
  }
};

// export const loginuserController = async (req, res) => {
//   try {
//     const authorized = await getUserByEmail(req);
//     res.send(authorized);
//     // console.log(req.customData);
//     // res.send(req.customData);
//   } catch (error) {
//     res.status(500).send(error.message);
//   }
// };
