const IndexPage = (req, res) => {
  try {
    res.render("index", { PageTitle: "Tarık Soğukpınar" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

module.exports = {
  IndexPage,
}