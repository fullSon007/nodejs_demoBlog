const { hashedPassword, hashPassword, comparePassword } = require('./helpers/auth');
const User = require('../models/Blog');
const validator = require("email-validator");
const jwt = require('jsonwebtoken');
const { token } = require('morgan');

class RegisterController {

    // [Get] /register
    render(req, res) {
        res.render('register')
    }

    // [Post] /register
 async register(req, res) {
        // console.log(req.body);

        try {
            //destructure req.body
        const {name, email, password } = req.body;

        // validation
        if(!name || name.trim() === "") {
            return res.status(400).json({error: "Name is required"});
        }
        if(!validator.validate(email)) {
            return res.status(400).json({error: "Valid email is required"});
        }
        if(!password) {
            return res.status(400).json({error: "Password is required"});
        }

        if(password.length < 6) {
            return res
            .status(400)
            .json({error: "Password should be at least 6 characters long"});
        }

        //check if user exists
        const existingUser = await User.findOne({ email });
        if(existingUser) return res.status(400).json({error: "Email is taken"});


        //hash password
        const hashedPassword = await hashPassword(password);

        //create and save user
        const user = await new User({
            name,
            email,
            password: hashedPassword,
        })

        await user.save();

        //generate jwt
        const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET, {
            expiresIn: "1d",
        });

        user.password = undefined;

        // send response
         res.json({user , token})
        //res.render("home")
        
        } catch (err) {
            console.log(err);
            return res.status(400).json({error: "Something went wrong!"})
        }

        // console.log(user)
        
    }


}

module.exports = new RegisterController;

