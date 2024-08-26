const jwt = require("jsonwebtoken");
exports.generateAdminToken = (adminInfo) => {
  const payload = {
    email: adminInfo.email,
  };
  const token = jwt.sign(payload, process.env.TOKEN_SECRET, {
    expiresIn: "100days",
  });

  return token;
};
