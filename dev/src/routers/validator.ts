import { body } from "express-validator";
import bcrypt from "bcrypt";

export const userSchema = [
  body("username").notEmpty().isAlphanumeric().escape().isLength({ min: 5 }),
  body("email").notEmpty().isEmail().withMessage("Wrong Email Format").escape(),
  body("password")
    .notEmpty()
    .isLength({ min: 6 })
    .withMessage("Password Must be min 6 character")
    .escape()
    .customSanitizer(async (val) => {
      const hash = await bcrypt.hash(val, 10);
      return hash;
    }),
];
