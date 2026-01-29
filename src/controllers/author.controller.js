const { globalError } = require("shokhijakhon-error-handler");
const authorModels = require("../models/author.models");
const { isValidObjectId } = require("mongoose");
const bookModels = require("../models/book.models");

module.exports = {
    async CREATE_AUTHOR(req, res) {
        try {
            let newAuthor = req.body
         let insertAuthor = await authorModels.create(newAuthor);
         return res.status(201).json({message: "Author successfully created", status: 201, id: insertAuthor._id})
            

            
        } catch (err) {
            return globalError(err, res);
            
        }
    },
    async GET_AUTHORS(req, res) {
        try {
            let authors = await authorModels.find();
            return res.json(authors);
            
            
        } catch (err) {
            return globalError(err, res);
            
        }
    },
    async GET_AUTHOR(req, res) {
        try {
            let updateAuthor = req.body
            let {id} = req.params;
            if(!isValidObjectId(id)) throw new Error("Invalid author id", 400);
            let findAuthor = await authorModels.findById(id);
            if(!findAuthor) throw new Error("Author not found", 404);
            let updatedAuthor = await authorModels.findByIdAndUpdate(id, updateAuthor, {new: true});
            return res.json(updatedAuthor);
            
        } catch (err) {
            return globalError(err, res);
            
        }
    },
    async UPDATE_AUTHOR(req, res) {
        try {
            
            let updateAuthor = req.body
            let {id} = req.params;
            if(!isValidObjectId(id)) throw new Error("Invalid author id", 400);
            let findAuthor = await authorModels.findById(id);
            if(!findAuthor) throw new Error("Author not found", 404);
            let updatedAuthor = await authorModels.findByIdAndUpdate(id, updateAuthor, {new: true});
            return res.status(201).json({message: "Author successfully updated", status: 201}, updatedAuthor);
            
        } catch (err) {
            return globalError(err, res);
            
        }
    },
    async DELETE_AUTHOR(req, res) {
        try {
            
            let {id} = req.params;
            if(!isValidObjectId(id)) throw new Error("Invalid author id", 400);
            let findAuthor = await authorModels.findById(id);
            if(!findAuthor) throw new Error("Author not found", 404);
            let deletedAuthor = await authorModels.findByIdAndDelete(id)
            let deletedBooks = await bookModels.deleteMany({author: id});
            return res.status(201).json({message: "Author successfully deleted", status: 201}, deletedAuthor, deletedBooks);
  
        } catch (err) {
            return globalError(err, res);
            
        }
    }
}
