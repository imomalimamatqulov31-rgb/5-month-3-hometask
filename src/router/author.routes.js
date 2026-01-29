const { Router } = require("express");
const authorController = require("../controllers/author.controller");

const authorRouter = Router();

authorRouter.post("/create", authorController.CREATE_AUTHOR)
authorRouter.get("/all", authorController.GET_AUTHORS)

authorRouter.route("/:id")
.get(authorController.GET_AUTHOR)
.put(authorController.UPDATE_AUTHOR)
.delete(authorController.DELETE_AUTHOR)

module.exports = authorRouter;