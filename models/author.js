const mongoose = require("mongoose");

const AuthorShcema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Author", AuthorShcema);
