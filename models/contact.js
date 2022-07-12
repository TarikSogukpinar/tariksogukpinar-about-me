const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      maxlength: 30,
    },
    title: {
      type: String,
      required: true,
      maxlength: 30,
    },
    email: {
      type: String,
      required: [true, "Please provide valid email!"],
      maxlength: 30,
      match: [
        /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
        "Please provide valid email",
      ],
    },
    contactDescription: {
      type: String,
      require: true,
      maxlength: 150,
    },
    contactCreatedAt: {
      typ: Date,
    },
  },
  { timestamps: true }
);

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
