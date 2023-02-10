const express = require('express');
const app = express();
const port = 3003;
const middleware = require("./middleware");
const path = require('path');
const bodyParser = require("body-parser");

const server = app.listen(port, () => console.log("Server listening on port " + port));

app.set("view engine", "pug");
app.set("views", "views");

// Line to specify anything inside pf this path, and whatever is inside the folder it's to be served as a static file
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")))

// Routes
const loginRoute = require('./routes/loginRoutes');
const registerRoute = require('./routes/registerRoutes');

app.use("/login", loginRoute)
app.use("/register", registerRoute)

app.get("/", middleware.requireLogin, (req, res, next) => {

    const payload = {
        pageTitle: "Home"
    }

    res.status(200).render("home", payload);
})