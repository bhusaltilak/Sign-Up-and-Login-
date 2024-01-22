const {check,validationResult}= require("express-validator");
const models = require("../models");

const {User}=models; 
const validation ={};

validation.UserValidation=[
    check('Fname')
    .notEmpty()
    .withMessage("First name is required")
    .isAlpha()
    .withMessage("Accept only alphabet")
    .isLength({min:3,max:20})
    .withMessage("Name is to short"),

    check('Lname')
    .notEmpty()
    .withMessage("Last name is required")
    .isAlpha()
    .withMessage("Accept only alphabet")
    .isLength({min:3,max:20})
    .withMessage("Too short"),

    check('Gender')
    .notEmpty()
    .withMessage("Gender is missing"),

    check('Contact_Number')
    .notEmpty()
    .withMessage('Number is required')
    .isInt()
    .withMessage('Number should be an integer')
    .isMobilePhone()
    .withMessage("it should mobile number ")
    .isLength({min:10,max:20})
    .withMessage('Number should be of minimum 10 digits'),

    check('Address')
    .notEmpty()
    .withMessage('Address is required'),

    check('Email')
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Should be an email type'),

    check('Password')
    .notEmpty()
    .withMessage('Password is required')
    .isLength({min:8})
    .withMessage('Password must contain 8 digits'),


    (req,res,next)=>{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({
                errors:errors.array()
            })
       }
       return next()
   }
  
]

module.exports = validation;


