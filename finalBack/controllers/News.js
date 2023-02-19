const New = require("../models/news");

// all News
exports.allNews = async (req, res, next) => {
  const News = await New.find();
  res.json({
    success: true,
    data: News,
  });
  next();
};

// single News
exports.descriptionNew = async (req, res, next) => {
  const infoNew = await New.findById(req.params.newsID);
  res.status(200).json({
    success: true,
    data: infoNew,
  });
  next();
};

// post a News
exports.createNews = async (req, res, next) => {
  const { name, image, title, data, number } = req.body;

  const createrdNews = await New.create(req.body);
  res.status(200).json({
    success: true,
    data: createrdNews,
  });
  next();
};

// delete News
exports.deleteNews = async (req, res, next) => {
  const deletedNews = await New.findByIdAndDelete(req.params.newsID);

  res.status(200).json({
    success: true,
    dataP: deletedNews,
  });
  next();
};

// update News
exports.updateNews = async (req, res, next) => {
  const { name, image, title, data, number } = req.body;

  const updatedNews = await New.findByIdAndUpdate(req.params.newsID, req.body);
  res.status(200).json({
    success: true,
    data: updatedNews,
  });
  next();
};
