import fs from "fs";
import { makeHash } from "../../utils/password-hash.js";
import { Jwt } from "jsonwebtoken";
const userDb =
  "/Users/23LP2259/OneDrive - Nestcore LLC/income-expense/backend-income-expense/module/user.json";
export const createUsers = async (req, res) => {
  // create user
  try {
    const { email: paramEmail, password, username } = req?.body;

    const secretPassword = makeHash(password);

    const alluser = JSON.parse(await fs.readFileSync(userDb, "utf-8"));
    const newUser = alluser.some((user) => user?.email === paramEmail);
    if (!newUser) {
      alluser.push({
        email: paramEmail,
        password: secretPassword,
        username,
      });
      await fs.writeFileSync(userDb, JSON.stringify(alluser));
      return "Хэрэглэгч амжилттай үүсгэлээ";
    } else {
      throw new Error("Бүртгэлтэй хэрэглэгч bna");
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

// email-g olohiin tuld JSON file aa stringify hiigeed orj irsen mail-g davhtsaj bga esehiig shalgah
// email baihgui bol shineer uusgeh
