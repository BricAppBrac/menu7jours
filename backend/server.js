const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();
const cors = require("cors");
const port = 5000;

// connexion à la DB
connectDB();

const app = express();

// Authorisation CORS
app.use(
  cors({
    origin: "http://localhost:3000",
    // origin: "https://bricappbrac.github.io/menu7jours/",
    credentials: true,
    optionsSuccessStatus: 200,
  })
);

// Middleware qui permet de traiter les données de la Request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/recipe", require("./routes/recipe.routes"));
app.use("/user", require("./routes/user.routes"));
app.use("/menu", require("./routes/menu.routes"));

// Lancer le serveur
app.listen(port, () => console.log("Le serveur a démarré au port  " + port));
