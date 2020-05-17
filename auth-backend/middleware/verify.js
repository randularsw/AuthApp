const jwt = require("jsonwebtoken");
module.exports = function (req, res, next) {
  try {
    const token = req.header("token");
    if (!token) return res.send("Access denied");

    const tokenSecret = "gj56ubrtb2yesyv63jhn6rt3j";
    const verified = jwt.verify(token, tokenSecret);
    req.user = verified;
    next();
  } catch (error) {
    res.send({ data: "Invalid token" });
  }
};
