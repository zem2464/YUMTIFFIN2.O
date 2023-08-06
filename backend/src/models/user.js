const { Db } = require("mongodb");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    // required: true,
    // sparse: true,
    // 
    required:function()
    {
      return !this.phoneNumber
    },
  },
  phoneNumber: {
    type: Number,
    unique: true,
    // required:true,
    // sparse: true,
    // validate: {
    //   validator: function (value) {
    //     return value || this.email;
    //   },
    //   message: "At least one of email or phoneNumber is required.",
    // },
    required:function()
    {
      return !this.email
    },
  },
  password: {
    type: String,
    required: true,
  },
});

const loginschema = new mongoose.Schema({
  firstname: {
    type: String,
   
  },
  lastname: {
    type: String,
 
  },
  email: {
    type: String,
    unique: true,
    // required: true,
    // sparse: true,
    // validate: {
    //   validator: function (value) {
    //     return value || this.phoneNumber;
    //   },
    //   message: "At least one of the email or phone number is required",
    // },
    required:function()
    {
      return !this.phoneNumber
    },
  },
  phoneNumber: {
    type: Number,
    unique: true,
    // sparse: true,
    // validate: {
    //   validator: function (value) {
    //     return value || this.email;
    //   },
    //   message: "At least one of email or phoneNumber is required.",
    // },
    required:function()
    {
      return !this.email
    },
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);
const LoginUser = mongoose.model("LoginUser", loginschema);


module.exports = {
  User,
  LoginUser,
  
};
