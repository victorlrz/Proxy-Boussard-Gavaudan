const express = require("express");
const path = require("path");
const app = express();
const favicon = require("serve-favicon");
const cors = require("cors");
const port = process.env.PORT || 5000;
const mountRoutes = require("./routes");

app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(favicon(path.join(__dirname, "public/images", "favicon.ico")));

// Cors config & WhiteList
const whitelist = [
  "http://localhost:3000",
  "https://cryptic-harbor-77074.herokuapp.com",
];

const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.use(cors(corsOptions));

//Routes
mountRoutes(app);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
