const express = require("express");
const router = express.Router();
const postgreClient = require("../helpers/postgreClient");

router.post("/addNewPost", async (req, res) => {
  try {
    const text =
      "INSERT INTO contact (contact_firstname, contact_title, contact_email, contact_github,contact_linkedin,contact_contactdescription,contact_contactcreatedat) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *";
    const values = [
      req.body.contact_firstname,
      req.body.contact_title,
      req.body.contact_email,
      req.body.contact_github,
      req.body.contact_linkedin,
      req.body.contact_contactdescription,
      new Date(),
    ];
    const { rows } = await postgreClient.query(text, values);
    
    return res.status(201).json(res.redirect("/"));
    
  } catch (error) {
    console.log("Error: ", error.message);
    return res.status(400).json({ message: error.message });
  }
});

module.exports = router;
