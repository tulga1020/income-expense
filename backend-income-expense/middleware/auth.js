import fs from "fs";
import { compareHash } from "./../utils/password-hash.js";
const userDb =
  "/Users/23LP2259/OneDrive - Nestcore LLC/income-expense/backend-income-expense/module/user.json";

export const authorization = async (req, res, next) => {
  try {
    const { email: bodyemail, password } = req.body;

    const loginuserjson = JSON.parse(await fs.readFileSync(userDb, "utf-8"));
    const userfound = loginuserjson.find(({ email }) => email === bodyemail);
    const comparing = compareHash(password, userfound.password);
    if (!comparing) {
      res.send("email or password buruu baina");
      return;
    }
    if (comparing) {
      next();
    }
  } catch (error) {
    res.send("email or password buruu baina");
  }
};
