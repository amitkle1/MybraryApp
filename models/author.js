const mongoose = require("mongoose");
const Book = require("./book");
const AuthorShcema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

AuthorShcema.pre("remove", function (next) {
  Book.find({ author: this.id }, (err, books) => {
    if (err) {
      next(err);
    } else if (books.length > 0) {
      next(new Error("This Author has books cant remove"));
    } else {
      next();
    }
  });
});

module.exports = mongoose.model("Author", AuthorShcema);
