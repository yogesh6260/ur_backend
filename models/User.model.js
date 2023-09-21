const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    fname: {
      type: String,
      required: [true, "Please Enter Firstname"],
    },
    lname: {
      type: String,
      required: [true, "Please Enter Lastname"],
    },
    email: {
      type: String,
      required: [true, "Please Enter Email"],
    },
    password: {
      type: String,
      required: [true, "Please Enter Password"],
    },
    city: {
      type: String,
      required: [true, "Please Enter City"],
    },
    state: {
      type: String,
      required: [true, "Please Enter State"],
    },
    country: {
      type: String,
      required: [true, "Please Enter Country"],
    },
    pincode: {
      type: Number,
      required: [true, "Please Enter Pincode"],
      min: 6,
    },
    countryCode: {
      type: Number,
      required: [true, "Please Enter Country Code"],
    },
    contact: {
      type: Number,
      required: [true, "Please Enter Mobile Number"],
      min: 10,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", UserSchema);
