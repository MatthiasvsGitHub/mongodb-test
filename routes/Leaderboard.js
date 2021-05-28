const Leadb = require("../models/Leaderboard");

const express = require("express");
const leadbRouter = express.Router();
leadbRouter.use(express.urlencoded())


leadbRouter.get("/", (req, res) => {
    res.send('Welcome to the API :D \n\ .get /leaderboard to see all entries and .post to add an entry')
});


leadbRouter.get("/leaderboard", (req, res) => {
    Leadb.find().sort( {score: -1} )
        .then((entries) => res.json(entries))
        .catch((err) => res.json(err));
});

leadbRouter.post('/leaderboard', (req, res) => {
    Leadb
        .create(req.body)
        .then((entry) => res.json(entry))
        .catch((err) => res.json(err));
})

leadbRouter.delete('/leaderboard/:id', (req, res) => {
    Leadb
    .deleteOne({ _id : req.params.id})
    .then(() => res.json('Entry deleted'))
    .catch((err) => res.json(err))
})

module.exports = leadbRouter;