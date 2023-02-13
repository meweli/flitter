const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require("body-parser")
const bcrypt = require("bcrypt");
const User = require('../schemas/UserSchema');

router.get("/", (req, res, next) => {

    var payload = {
        pageTitle: req.session.user.username,
        userLoggedIn: req.session.user,
        userLoggedInJs: JSON.stringify(req.session.user),
        profileUser: req.session.user
    }
    
    res.status(200).render("profilePage", payload);
})

router.get("/:username", async (req, res, next) => {

    var payload = await getPayload(req.params.username, req.session.user);

    res.status(200).render("profilePage", payload);
})

async function getPayload(username, userLoggedIn) {
    var user = await User.findOne({ username: username })

    if(user == null) {
        return {
            pageTitle: "User not found",
            userLoggedIn: userLoggedIn,
            userLoggedInJs: JSON.stringify(userLoggedIn)
        }
    }

    return {
        pageTitle: user.username,
        userLoggedIn: userLoggedIn,
        userLoggedInJs: JSON.stringify(userLoggedIn),
        profileUser: user
    }
}

module.exports = router;