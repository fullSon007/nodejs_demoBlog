const { hashedPassword, hashPassword, comparePassword } = require('./helpers/auth');
const User = require('../models/Blog');
const validator = require("email-validator");
const jwt = require('jsonwebtoken');
const { token } = require('morgan');

class LoginController {

    // [Get] /register
    render(req, res) {
        res.render('login')
    }

    async login(req, res) {
        try {

            const { email, password } = req.body

            // find user by email
            const user = await User.findOne({ email })
            if (!user) {
                return res.status(400).json({ error: "You are not registered yet!" });
            }

            // compare the password
            const match = await comparePassword(password, user.password)
            if (!match) {
                return res.status(400).json({ error: "Wrong password!" });
            }

            // create jwt
            const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
                expiresIn: "1d",
            });

            let oldTokens = user.tokens || []

            if (oldTokens.length) {
                oldTokens = oldTokens.filter(t => {
                    const timeDiff = (Date.now() - parseInt(t.signedAt)) / 1000
                    if (timeDiff < 86400) {
                        return t
                    }
                })
            }

            await User.findByIdAndUpdate(user._id,
                {
                    tokens: [...oldTokens, { token, signedAt: Date.now().toString() }]
                })

            user.password = undefined;

            // send response
            
             res.json({ user, token });
             res.render("home");
            //  res.json({ redirectUrl: '/home'  });

        } catch (err) {
            console.log(err);
            return res.status(400).json({ error: "Something went wrong!" })
        }
    }

}

module.exports = new LoginController