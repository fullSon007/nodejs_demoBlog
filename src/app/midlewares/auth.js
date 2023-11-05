const jwt = require('jsonwebtoken')
const User = require('../models/Blog');
// User Login
exports.requireSignin = (req, res, next) => {
    try {
        const decoded = jwt.verify(
            req.headers.authorization,
            process.env.JWT_SECRET
        );
        console.log(decoded);
        req.user = user;
        next();
    } catch (err) {
        console.log(err);
        return res.status(401).json({error: "Invalid or expired token"})
    }
}

// Admin
exports.isAdmin = async (req, res, next) => {
    try {
        const user = await User.findById(req.user._id);
        if(user.role !== "Admin") {
            return res.status(403).json({error: "Admin resource. Access denied."});
        } else {
            next();
        }
    } catch (err) {
        console.log(err);
        return res.status(401).json({error: "Admin resource. Access denied."});
    }
}