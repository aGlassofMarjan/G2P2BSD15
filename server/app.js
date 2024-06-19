if (process.env.NODE_ENV !== "production") {
  require('dotenv').config();
}

const express = require('express');
const app = express();
const routers = require('./routers');
const cors = require("cors");
const port = process.env.PORT || 3000;

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routers);

server.listen(port, () => {
  console.log('success on port', port);
});

// module.exports = app;
