const express = require("express");
const { promptUser } = require("./src/utils/utility_functions");
//import routes
const api = require("./src/routes/index");

const app = express();
const PORT = process.env.PORT || 3000;
// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api", api);

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to the Employee Tracker!");
});

const init = () => {
  promptUser();
};

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  init();
});
