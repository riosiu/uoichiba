import mongoose from "mongoose";
import Users from "../model/user.js";
import bcrypt from "bcrypt";
export const SignIn = async (req, res, next) => {
  try {
    // const registeredUser = Users.find({ email: req.body.email });

    // if (registeredUser >= 1) {
    //   res.json({
    //     status: false,
    //     message: "User already exists",
    //     data: null,
    //   });
    // } else {
    //   const user = new Users({
    //     _id: new mongoose.Types.ObjectId(),
    //     email: req.body.email,
    //     password: req.body.password,
    //     name: req.body.name,
    //   });
    // }

    const { email, password } = req.body;
    const existingUser = await Users.findOne({
      email,
    });

    if (existingUser) {
      return res.status(400).json({
        status: false,
        message: "User already exists",
      });
    }

    const hashPassword = await bcrypt.hash(password, 12);
    const user = new Users({
      email,
      password: hashPassword,
    });

    await user.save();
  } catch (error) {}
};
