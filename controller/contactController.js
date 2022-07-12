const Contact = require("../models/contact");



const addNewContact = (req, res) => {
  const contact = new Contact(req.body);
  contact
    .save()
    .then((result) => {
      res.redirect("/");
      console.log("Form başarı ile gönderildi!");
    })
    .catch((err) => {
      console.log(err);
      console.log("Form gönderimi başarısız!");
    });
};

module.exports = {
  addNewContact,
};
