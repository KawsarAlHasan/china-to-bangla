const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const bodyParser = require("body-parser");
const colors = require("colors");
const app = require("./app");

const cors = require("cors");
const corsConfig = {
  origin: "*",
  credential: true,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
};

app.options("", cors(corsConfig));

app.use(cors(corsConfig));
app.use(cors());
app.use(bodyParser.json());

const { dbConnect } = require("./utils/dbConnect");

dbConnect();

// server
const port = process.env.PORT || 5100;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`.blue.bold);
});
