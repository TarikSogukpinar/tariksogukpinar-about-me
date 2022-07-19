const IndexPage = (req, res) => {
  res.render("index", { title: "Tarık Soğukpınar" });
};

module.exports = {
  IndexPage,
};
