const Student = require("../models/Student");

const express = require("express");
const postRouter = express.Router();
postRouter.use(express.urlencoded())


postRouter.get("/", (req, res) => {
    res.send('Welcome to the API :D')
});


postRouter.get("/students", (req, res) => {
    Student.find()
        .then((student) => res.json(student))
        .catch((err) => res.json(err));
});

postRouter.post('/students', (req, res) => {
    Student
        .create(req.body)
        .then((student) => res.json(student))
        .catch((err) => res.json(err));
})

postRouter.get('/students/:id',(req, res) => {
    Student
    .findById(req.params.id)
    .then(post => res.json(post))
    .catch((err) => res.json(err));
})

postRouter.put('/students/:id', (req, res) => {
    Student
    .updateOne({_id : req.params.id}, {$set : req.body})
    .then(post => res.json(post))
    .catch((err) => res.json(err));
})



postRouter.delete('/students/:id', (req, res) => {
    Student
    .deleteOne({ _id : req.params.id})
    .then(() => res.json('Student deleted'))
    .catch((err) => res.json(err))
})

module.exports = postRouter;