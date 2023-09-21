const bcryptjs = require("bcryptjs");
const UserModel = require("../models/User.model");

const userRegister = async (req, res) => {
  try {
    const {
      fname,
      lname,
      email,
      password,
      city,
      state,
      country,
      pincode,
      countryCode,
      contact,
    } = req.body;
    if (
      !fname ||
      !lname ||
      !email ||
      !password ||
      !city ||
      !state ||
      !country ||
      !pincode ||
      !countryCode ||
      !contact
    ) {
      return res.status(400).json({
        success: false,
        message: "Please Enter All Fields",
      });
    }
    // Check if user exists
    const userExist = await UserModel.findOne({ email });
    if (userExist) {
      return res.status(404).json({
        success: false,
        message: "User already exist",
      });
    }

    // Hash Password
    const salt = bcryptjs.genSaltSync(10);
    const hashedPassword = await bcryptjs.hashSync(password, salt);
    const newUser = await UserModel.create({
      fname,
      lname,
      email,
      password: hashedPassword,
      city,
      state,
      country,
      pincode,
      countryCode,
      contact,
    });
    res.status(201).json({
      success: true,
      message: "User Created Successfully!",
      data: newUser,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      error: error.message,
    });
    console.log(error);
  }
};

module.exports = { userRegister };
