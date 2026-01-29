const { Schema, model } = require("mongoose");

const authorSchema = new Schema({
    full_name: {
        type: String,
        required: [true, "Author full_name is required !"],
        trim: true,
        unique: [true, "Author full_name already exists !"],
        validate: {
            validator: (val) => val !== null && val !== '',
            message: "Author full_name cannot be null or empty!"
        }
    },
    date_of_birth: {
        type: Date,
        required: [true, 'Author date_of_birth is required !'],
        validate: {
            validator(val) {
                return val !== null && val !== ""
            },
            message: "Author date_of_birth cannot be null or empty!"
        }
    },
    date_of_death: {
        type: Date,
        default: null
    },
    bio: {
        type: String,
        required: [true, "Author bio is required !"],
        trim: true,
        minlength: [10, "Bio must be at least 10 characters long"]
    },
    years_active: {
        type: String,
        trim: true,
        required: [true, "Years active is required!"]
    },
    photos: {
        type: String,
        trim: true
    }
}, {
    versionKey: false,
    timestamps: true
})

module.exports = model("authors", authorSchema);







