function errorHandler(err, req, res, next) {
  let message;

  console.log(err);
  if (err.name == "CastError") {
    message = "Given id is not defined";
  }
  if (err.name == "ValidationError") {
    message = err.errors.category.message;
  }
  if (err.code == 11000) {
    message = "Given name is already taken";
  }
  res.send({
    succes: false,
    message: message,
  });
}
module.exports = errorHandler;
