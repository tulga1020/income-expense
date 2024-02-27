// import fs from "fs";
import { makeHash } from "../../utils/password-hash.js";

// const userDb =
//   "/Users/23LP2259/OneDrive - Nestcore LLC/income-expense/backend-income-expense/module/user.json";

// create user

const createUserQuery = async (email, password, username, age) => {
  //shine hereglegch uusgeh function
  const userCreateQuery = `
    INSERT INTO users(username, email, password,  age) VALUES ($1, $2, $3, $4) RETURNING id 
    `; // User

  const userId = await client.query(userCreateQuery, [
    username,
    email,
    password,
    age,
  ]);
  return userId;
};
export const createUsers = async (req, res) => {
  const { email, password, username, age } = req.body;
  // try {
  const secretPassword = makeHash(password);
  result = createUserQuery();
  console.log(result);
  res.send(result);

  //   const alluser = JSON.parse(await fs.readFileSync(userDb, "utf-8"));
  //   const newUser = alluser.some((user) => user?.email === paramEmail);
  //   if (!newUser) {
  //     alluser.push({
  //       email: paramEmail,
  //       password: secretPassword,
  //       username,
  //     });
  //     await fs.writeFileSync(userDb, JSON.stringify(alluser));
  //     return "Хэрэглэгч амжилттай үүсгэлээ";
  //   } else {
  //     throw new Error("Бүртгэлтэй хэрэглэгч bna");
  //   }
  // } catch (error) {
  //   throw new Error(error.message);
  // }
};

// email-g olohiin tuld JSON file aa stringify hiigeed orj irsen mail-g davhtsaj bga esehiig shalgah
// email baihgui bol shineer uusgeh
