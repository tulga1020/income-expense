import fs from "fs";

const userDb =
  "/Users/23LP2259/OneDrive - Nestcore LLC/income-expense/backend-income-expense/module/user.json";
export const login = async (req, res) => {
  try {
    const { email: paramEmail } = req.body;
    const allUsersJson = await fs.readFileSync(userDb);
    const allUser = JSON.parse(allUsersJson);
    const exactUser = allUser.find(({ email }) => email === paramEmail);
    return exactUser;
  } catch (error) {
    throw new Error(error.message);
  }
};
