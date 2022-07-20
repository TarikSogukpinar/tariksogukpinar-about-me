const IndexPage = (req, res) => {
  res.render("index", { PageTitle: "Tarık Soğukpınar" });
};

module.exports = {
  IndexPage,
};
