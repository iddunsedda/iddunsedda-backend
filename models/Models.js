const mongoose = require('mongoose');

//SCHEMAS

const ArtifactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  imageURL: { type: String, required: true },
  realm: String,
  strength: Number,
  craft: Number,
  carry: Number,
  life: Number
});

const EnemySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  imageURL: { type: String, required: true },
  realm: String,
  strength: Number,
  craft: Number,
  carry: Number,
  life: Number,
  artifacts: [{ type: Schema.Types.ObjectId, ref: 'Artifact' }]
});

const EventSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  imageURL: { type: String, required: true },
  realm: String,
  strength: Number,
  craft: Number,
  carry: Number,
  life: Number,
  artifacts: [{ type: Schema.Types.ObjectId, ref: 'Artifact' }],
  followers: [{ type: Schema.Types.ObjectId, ref: 'Follower'}]
})

const FollowerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  imageURL: { type: String, required: true },
  realm: String,
  strength: Number,
  craft: Number,
  carry: Number,
  life: Number
})

const LocationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  imageURL: { type: String, required: true },
  realm: String,
  strength: Number,
  craft: Number,
  carry: Number,
  life: Number,
  enemies: [{type: Schema.Types.ObjectId, ref: 'Enemy'}]
})

//SCHEMA CONSTANTS

const Artifact = mongoose.model('Artifact', ArtifactSchema);
const Enemy = mongoose.model('Enemy', EnemySchema);
const Event = mongoose.model('Event', EventSchema);
const Follower = mongoose.model('Follower', FollowerSchema);
const Location = mongoose.model('Location', LocationSchema)

module.exports = { Artifact, Enemy, Event, Follower, Location }
