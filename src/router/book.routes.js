const { Router } = require("express");
const bookController = require("../controllers/book.controller");

const bookRouter = Router();

bookRouter.post("/create", bookController.CREATE_BOOK)
bookRouter.get("/all", bookController.GET_BOOKS)

bookRouter.route("/:id")
.get(bookController.GET_BOOK)
.put(bookController.UPDATE_BOOK)
.delete(bookController.DELETE_BOOK)

module.exports = bookRouter;