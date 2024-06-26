import userModel from "../models/userModel.js";

export const registerController = async (req, res, next) => {
  const { name, email, password } = req.body;

  try {
    // //validate
    if (!name) {
      next("name is required");
    }
    if (!email) {
      next("email is required");
    }
    if (!password) {
      next("password is required and greater than 6 character");
    }
    const exisitingUser = await userModel.findOne({ email });
    if (exisitingUser) {
      next("Email Already Register Please Login");
    }

    const user = await userModel.create({ name, email, password });
    res.status(201).send({
      success: true,
      messsage: "User created successfully",
      user,
    });
  } catch (error) {
    // console.log(error);
    // res.status(400).send({
    //   success: false,
    //   messsage: "Error in Register Controller",
    //   error,
    // });

    next(error);
  }
};
