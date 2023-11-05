const { hashedPassword, hashPassword, comparePassword } = require('./helpers/auth');
const User = require('../models/Blog');
const jwt = require('jsonwebtoken');
const { token } = require('morgan');

class LogoutController {

    ren(req, res) {
        res.render("home")
    }

    async logout(req, res) {

            const token = req.headers.authorization;
            if (!token) {
                return res
                    .status(401)
                    .json({ message: "Authorization fail!" });
            }

            const tokens = req.user.tokens;
            const newTokens = tokens.filter(t => t.token !== token)

            await User.findByIdAndUpdate(req.user._id, { tokens: newTokens })
            res.json({ message: "Logout successfully" });
        }

    }



module.exports = new LogoutController;