const mongoose = require('mongoose');

const EnemySchema = new mongoose.Schema({

})

const Enemy = mongoose.model('Enemy', EnemySchema)

module.exports = Enemy
