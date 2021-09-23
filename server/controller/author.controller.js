const Author = require("../model/author.model");

module.exports.createAuthor = (req, res) => {
    Author.create(req.body)
        .then(newAuthor => res.json({ newAuthor: newAuthor }))
        .catch(err => res.json({ message: "Error trying to create method", error: err }));
}

module.exports.findAuthors = (req, res) => {
    Author.find()
        .then(authors => res.json({ authors: authors }))
        .catch(err => res.json({ message: "Error trying to find all authors", error: err }));
}

module.exports.findAuthorById = (req, res) => {
    Author.findById({ _id: req.params.id })
        .then(author => res.json({ author: author }))
        .catch(err => res.json({ message: "Error trying to find author by id", error: err }))
}

module.exports.updateAuthor = (req, res) => {
    Author.updateOne({ _id: req.params.id })
        .then(resUpdate => res.json({ resUpdate: resUpdate }))
        .catch(err => res.json({ message: "Error trying to update author", error: err }))
}

module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({ _id: req.params.id })
    then(resDelete => res.json({ resDelete: resDelete }))
}