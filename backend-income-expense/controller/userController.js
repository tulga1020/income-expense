import { login } from "../queries/users/login-user.js";
import { createUsers } from "../queries/users/create-user.js";
export const loginController = async (req, res) => {
  try {
    const user = await login(req);
    res.send(user);
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
