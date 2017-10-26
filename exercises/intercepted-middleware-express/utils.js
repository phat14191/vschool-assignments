function explosion(req, res, next) {
  req.explosion = "BangBang";
  next();
}

module.exports = {
  explosion
}
