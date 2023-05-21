const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require('body-parser')
require('dotenv').config()
const port = process.env.PORT;
const errorHandler = require('./errorHandler');

app.use(bodyParser.json())
const userRoutes = require("./routes/user");

app.use(cors());
app.use(userRoutes);

app.get('/healthcheck', (req, res) => {
  res.json({ status: 'success' });
});

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
