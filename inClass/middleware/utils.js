function explosion(req, res, next) {
  req.explosion = "BOMMM";
  next();
}

module.exports = {
  explosion
}
