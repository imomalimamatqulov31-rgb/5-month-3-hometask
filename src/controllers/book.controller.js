const { globalError } = require("shokhijakhon-error-handler");
const bookModels = require("../models/book.models");
const authorModels = require("../models/author.models");
const { isValidObjectId } = require("mongoose");


module.exports = {

async CREATE_BOOK(req, res) {
    try {
      let newBook = req.body
      let findAuthor = await authorModels.findById(newBook.author);
      if(!findAuthor) return res.status(404).json({message: "Author not found", status: 404})
      let insertBook = await bookModels.create(newBook);
      return res.status(201).json({message: "Book successfully created", status: 201, id: insertBook._id})
    
      
    } catch (err) {
        return globalError(err, res);
    }
},
async GET_BOOKS(req, res) {
    try {
        let books = await bookModels.find().populate("author");
        return res.json(books);
      
    } catch (err) {
        return globalError(err, res);
    }
},
async GET_BOOK(req, res) {
    try {
        let {id} = req.params;
        if(!isValidObjectId(id)) throw new Error("Invalid book id", 400);
        let findBook = await bookModels.findById(id).populate("author");
        if(!findBook) throw new Error("Book not found", 404);
        return res.json(findBook);
      
    } catch (err) {
        return globalError(err, res);
    }
},
async UPDATE_BOOK(req, res) {
    try {
        let updateBook = req.body
        let {id} = req.params;
        if(!isValidObjectId(id)) throw new Error("Invalid book id", 400);
        let findBook = await bookModels.findById(id);
        if(!findBook) throw new Error("Book not found", 404);
        let updatedBook = await bookModels.findByIdAndUpdate(id, updateBook, {new: true});
        return res.status(201).json({message: "Book successfully updated", status: 201}, updatedBook);
      
    } catch (err) {
        return globalError(err, res);
    }
},
async DELETE_BOOK(req, res) {
    try {
        let {id} = req.params;
        if(!isValidObjectId(id)) throw new Error("Invalid book id", 400);
        let findBook = await bookModels.findById(id);
        if(!findBook) throw new Error("Book not found", 404);
        let deletedBook = await bookModels.findByIdAndDelete(id)
        return res.status(201).json({message: "Book successfully deleted", status: 201}, deletedBook);
      
    } catch (err) {
        return globalError(err, res);
    }
}

} 