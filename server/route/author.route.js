const AuthorController = require("../controller/author.controller");

module.exports = app => {
    app.post("/api/authors/new", AuthorController.createAuthor);
    app.get("/api/authors/all", AuthorController.findAuthors);
    app.get("/api/authors/:id", AuthorController.findAuthorById);
    app.put("/api/authors/:id", AuthorController.updateAuthor);
    app.delete("/api/authors/:id", AuthorController.deleteAuthor);
}