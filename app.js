const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.use("/public", express.static(path.join(__dirname, "public")));

app.use("/api/v1/user", require("./routes/user.route"));
app.use("/api/v1/admin", require("./routes/admin.route"));
app.use("/api/v1/vendor", require("./routes/vendor.route"));
app.use("/api/v1/product", require("./routes/product.route"));

app.use("/api/v1/image", require("./routes/image.route"));

app.use("/api/v1/subcription", require("./routes/subcription.route"));
app.use("/api/v1/subcriptionName", require("./routes/subcription.name.route"));

app.get("/", (req, res) => {
  res.send("Practice api is working");
});

module.exports = app;
