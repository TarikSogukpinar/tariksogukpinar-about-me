const SuccessPage = (req, res) => {
  res.render("success", { PageTitle: "Form Submit Successfully" });
};

module.exports = {
  SuccessPage,
};
