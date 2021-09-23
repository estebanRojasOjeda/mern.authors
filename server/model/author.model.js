const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({
    name: {
        required: [true, "The author name is required"],
        type: String
    }
});

const Author = mongoose.model("Author", AuthorSchema);
module.exports = Author;