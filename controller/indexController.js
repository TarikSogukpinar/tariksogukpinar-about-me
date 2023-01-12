const IndexPage = (req, res) => {
  try {
    res.render("index", { PageTitle: "Tarık Soğukpınar" });
  } catch (error) {
    console.log(error);
  }
};

export default { IndexPage };
