function errorHandler(err, req, res, next) {
  if (err.name === "ValidationError") {
    const errors = {};
    Object.keys(err.errors).forEach((key) => {
      errors[key] = err.errors[key].message;
    });
    return res.status(400).json({ errors });
  }
  // Handle other types of errors if needed
  // If the error is not a validation error, pass it to the default Express error handler
  next(err);
}

module.exports = errorHandler;
