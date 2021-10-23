// Require all packages necessary
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

// require our models
require("./models");

// Declare port
const PORT = process.env.PORT || 3000;

const app = express();

// This is all middleware for the app
app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Connect to Mongoose.
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/workout",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

// REQUIRE our HTML and API routes.
app.use(require("./routes/htmlRoutes"));
require("./routes/apiRoutes.js")(app);

// Listen to our server.
app.listen(PORT, () => {
  console.log(`App running on port http://localhost:${PORT}`);
});