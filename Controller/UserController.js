const models = require("../models");
const bcrypt = require("bcryptjs");
const { response } = require("express");

class signUpController {
  static signup = (req, res) => {
    res.render("../public/signup",{messages:req.flash()});
  };

  static Login = (req, res) => {
    res.render("../public/Login",{messages:req.flash()});
  };

  static register = (req, res) => {
    res.render("../public/Register");
  };

  static createUser = async (req, res) => {
    console.log(req.body);
    const hashPassword = await bcrypt.hash(req.body.Password, 10);
    const newUser = {
      Fname: req.body.Fname,
      Lname: req.body.Lname,
      Gender: req.body.Gender,
      Contact_Number: req.body.Contact_Number,
      Address: req.body.Address,
      Email: req.body.Email,
      Password: hashPassword,

    };
    console.log(newUser);
    
    const find_User = await models.User.findOne({
      where: { Email: req.body.Email },
    });
    if (find_User) {
      req.flash("error","Email already exist!")
      return res.redirect('/api/User/signup');
      return res.status(200).json({
        message: "Email already exist!!",
      });
    }
    const create_User = await models.User.create(newUser);
    return res.redirect("/api/User/login");

    if (create_User) {
      // return res.status(200).redirect("/api/User/signup");
    } else {
      return res.status(400).json({
        message: "Something went wrong!!",
      });
    }
  };

  static UserLogin = async (req, res) => {
    console.log(res.body);
    const EmailVerify = await models.User.findOne({
      where: { Email: req.body.Email },
    });

    
    if (!EmailVerify) {
      req.flash("Error","Email is invalid.")
       return res.redirect('/api/User/login');
      return res.status(400).json({
        message: "Invalid Email!!",
      });
    }
  
    const passwordVerify = await bcrypt.compare(
      req.body.Password,
      EmailVerify.Password
    );
    console.log(passwordVerify);
    if(!EmailVerify|| !passwordVerify){
      req.flash("error","Email or password is wrong")
      return res.redirect('/api/User/login')
    } else{
      return res.redirect("/api/User/register");
    }

    if (passwordVerify) {
            return res.redirect("/api/User/register");
      // return res.status(200).json({
      //   message:"Successfully"
      // })

    } else {
      return res.send("<h2>Email or password is invalid<h2>");
    }
  };
}

module.exports = signUpController;
