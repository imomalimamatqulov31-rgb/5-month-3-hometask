const { Schema, model} = require("mongoose");

const bookSchema = new Schema({
    title: {
        type: String,
        trim: true,
        required: [true, "Book titile is required"],
    },
    pages: {
        type: Number,
        min: [10, "book's pages must be at least 10"],
        required: [true, "Book's pages is requred"],
    },
    published_year: {
        type: Number,
        required: [true, "Published year is required"],
    },
    genre: {
        type: String,
        trim: true,
        required: [true, "Book genre is required"],
    },
    publisher: {
        type: String,
        trim: true,
         required: [true, "Publisher is required"],

    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "authors",
        required: [true, "Book author is required"],
    },
    description: {
        type: String,
        trim: true,
        minlength: [20, "Description must be at least 20 characters"],
        required: [true, "Book descriotion is required",]
    },
    cover_image: {
        type: String,
        trim: true,
        required: [true, "Cover image fro book is required"],
    }

},{
    versionKey: false,
    timestamps: true
});

module.exports = model("books", bookSchema);
