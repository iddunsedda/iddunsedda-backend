//pulling in schemas from model file
const { Artifact, Enemy, Event, Follower, Location, Realm } = require('./models/Models');

//setting up mongoose and bluebird
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/iddunsedda')

const addArtifact = (newArtifact) => {
  const artifact = new Artifact(newArtifact);
  artifact.save((err) => {
    console.log(err)
  })
  console.log('New artifact added!');
  return Promise.resolve("success")
}

const getAllArtifacts = () => {
  return Artifact.find()
}


module.exports = {
  addArtifact, getAllArtifacts
}
