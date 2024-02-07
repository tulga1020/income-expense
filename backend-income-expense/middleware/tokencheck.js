import jwt from "jsonwebtoken";
export const tokencheck = (req, res, next) => {
  const tokenaccess = req.headers.authorization;
  jwt.verify(
    tokenaccess,
    process.env.JWT_SECRET || "defaultSecret",
    (err, res) => {
      if (err) {
        console.log(err);
        res.status(401).send("tanii newtreh hugatsaa duussan bn");
      } else {
        next();
      }
      return result;
    }
  );
};
