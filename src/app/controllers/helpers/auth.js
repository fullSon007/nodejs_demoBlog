const bcrybt = require("bcrypt");

exports.hashPassword = async (password) => {
    const salt = await bcrybt.genSalt(10);
    return await bcrybt.hash(password, salt);
}

exports.comparePassword = async (password, hashed) => {
    return await bcrybt.compare(password, hashed);
}