const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require("body-parser")
const User = require('../../schemas/UserSchema');
const Post = require('../../schemas/PostSchema');

app.use(bodyParser.urlencoded({ extended: false }));

router.get("/", async (req, res, next) => {
    var searchObj = req.query;

    if (req.query.search !== undefined) {
        searchObj = {
            $or: [
                {firstName: {$regex: req.query.search, $options: "i"}},
                {lastName: {$regex: req.query.search, $options: "i"}},
                {userName: {$regex: req.query.search, $options: "i"}}
            ]
        }
    }

    User.find(searchObj)
    .then(results => {
        res.status(200).send(results)
    })
    .catch(error => {
        console.log(error);
        res.sendStatus(400);
    })
})

router.put("/:userId/follow", async (req, res, next) => {
    var userId = req.params.userId;

    var user = await User.findById(userId);

    if (user == null) {
        return res.sendStatus(404);
    }

    var isFollowing = user.followers && user.followers.includes(req.session.user._id);
    var option = isFollowing ? "$pull" : "$addToSet";

    req.session.user = await User.findByIdAndUpdate(req.session.user._id, { [option]: { following: userId } }, { new: true})
    .catch(error => {
        console.log(error);
        res.sendStatus(400);
    })

    User.findByIdAndUpdate(userId, { [option]: { followers: req.session.user._id } })
    .catch(error => {
        console.log(error);
        res.sendStatus(400);
    })
    
    res.status(200).send(req.session.user);
})

router.delete("/:userId", (req, res, next) => {
    User.findByIdAndDelete(req.params.userId)
    .then(() => res.redirect("/login"))
    .catch(error => {
        console.log(error);
        res.sendStatus(400);
    })
    
})

module.exports = router;