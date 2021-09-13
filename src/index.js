const express = require("express");
const engine = require("ejs-mate");
const path = require("path");
const morgan = require("morgan");

// Initializations
const app = express();

//settings
app.set("views", path.join(__dirname, "views"));
app.engine("ejs", engine);
app.set("view engine", "ejs");
app.set("port", process.env.Port || 3000);

// Middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/", require("./routes/index"));
app.use("/", require("./routes/order"));
app.use("/", require("./routes/product"));

app.listen(app.get("port"), () => {
  console.log("Server on Port", app.get("port"));
});
