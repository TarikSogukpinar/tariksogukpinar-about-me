const adminPages = (req, res) => {
  res.render("admin", { PageTitle: "Admin Page " });
};

module.exports = {
  adminPages,
};
