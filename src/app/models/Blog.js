const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogPost = new Schema({
    title: String,
    body: String,
    date: Date,
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
  });

const UserSchema = new Schema({
    name: {
      type: String,
      trim: true,
      required: true,
      max: 32
    },

    email: {
      type: String,
      trim: true,
      required: true,
      lowercase: true,
      unique: true
    },

    password: {
      type: String,
      required: true
    },

    role: {
      type: String,
      default: "Subcriber"
    }


});

  module.exports = mongoose.model('UserSchema', UserSchema);