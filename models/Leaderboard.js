const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Leaderboard = new Schema({
    name : {
        type: String, required: true, min: 2, max: 3
    },
    score : {
        type: Number, required: true
    }
})

module.exports = mongoose.model('Leaderboard', Leaderboard)