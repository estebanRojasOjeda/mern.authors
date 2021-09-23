const { Mongoose } = require("mongoose");

const AuthorSchema = new Mongoose.Schema({
    name: {
        required: [true, "The author name is required"],
        type: String
    }
});

const Author = Mongoose.model("Author", AuthorSchema);
module.exports = Author;