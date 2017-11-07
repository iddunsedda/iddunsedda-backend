const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//SCHEMAS

const ArtifactSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  imageURL: { type: String, required: true },
  icon: {type: String, required: true},
  //if special object (feathers, special weapon), mark special with name; otherwise, null
  special: String,
  realm: String,
  strength: Number,
  craft: Number,
  carry: Number,
  life: Number
});

const EnemySchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  imageURL: { type: String, required: true },
  realm: String,
  //if is a special boss, enter the name below; otherwise special is null
  special: String,
  strength: Number,
  craft: Number,
  carry: Number,
  life: Number,
  artifacts: [{ type: Schema.ObjectId, ref: 'Artifact' }]
});

const EventSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  imageURL: { type: String, required: true },
  realm: String,
  strength: Number,
  craft: Number,
  carry: Number,
  life: Number,
  artifacts: [{ type: Schema.ObjectId, ref: 'Artifact' }],
  followers: [{ type: Schema.ObjectId, ref: 'Follower'}]
})

const FollowerSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  imageURL: { type: String, required: true },
  icon: { type: String, required: true },
  realm: String,
  strength: Number,
  craft: Number,
  carry: Number,
  life: Number
})

const LocationSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  imageURL: { type: String, required: true },
  realm: String,
  strength: Number,
  craft: Number,
  carry: Number,
  life: Number,
  enemies: [{type: Schema.ObjectId, ref: 'Enemy'}]
})

const RealmSchema = new Schema({
  name: { type: String, required: true },
  imageURL: {type: String, required: true},
  locations: {type: Schema.ObjectID, ref: 'Location'},
  enemies: {type: Schema.ObjectId, ref: 'Enemy'},
  events: [{type: Schema.ObjectId, ref: 'Event'}]
})

//SCHEMA CONSTANTS

const Artifact = mongoose.model('Artifact', ArtifactSchema);
const Enemy = mongoose.model('Enemy', EnemySchema);
const Event = mongoose.model('Event', EventSchema);
const Follower = mongoose.model('Follower', FollowerSchema);
const Location = mongoose.model('Location', LocationSchema);
const Realm = mongoose.model('Realm', RealmSchema)

module.exports = { Artifact, Enemy, Event, Follower, Location, Realm }
