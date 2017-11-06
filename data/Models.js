const sqlite3 = require('sqlite3');
const Promise = require('bluebird');
const objection = require('objection');
const Model = objection.Model;
const Knex = require('knex');

const knex = Knex({
  client: "sqlite3",
  connection: {
    filename: __dirname + "/database/iddunsedda.db"
  }
});

Model.knex(knex);

const Artifacts = knex.schema.createTableIfNotExists("Artifacts", table => {
  table.increments("artifact_id").primary();
  table.string("artifact_name");
  table.string("artifact_description");
  table.string("artifact_realm")
  //craft, life, carry and strength to be added or subtracted from player scores
  table.integer("artifact_craft");
  table.integer("artifact_strength");
  table.integer("artifact_carry");
  table.integer("artifact_life");
  table.string("artifact_photo");
  //icon for sidebar when player is in possession
  table.string("artifact_icon");
})

const Followers = knex.schema.createTableIfNotExists("Followers", table => {
  table.increments("follower_id").primary();
  table.string("follower_name");
  table.string("follower_description");
  table.string("follower_realm");
  //craft, life, carry and strength to be added or subtracted from player scores
  table.integer("follower_craft");
  table.integer("follower_strength");
  table.integer("follower_carry");
  table.string("follower_photo");
})

const Locations = knex.schema.createTableIfNotExists("Locations", table => {
  table.increments("location_id").primary();
  table.string("location_name");
  table.string("location_description");
  table.string("location_realm");
  //reach: include class-based perks based on craft or strength
  table.integer("location_strength");
  table.integer("location_craft");
  table.string("location_photo");
})

const Enemies = knex.schema.createTableIfNotExists("Enemies", table => {
  table.increments("enemy_id").primary();
  table.string("enemy_name");
  table.string("enemy_description");
  table.string("enemy_realm");
  //enemy craft and strength to be deployed against player
  table.integer("enemy_craft");
  table.integer("enemy_strength");
  //reach: enemy damage done to player life (default 1, more for bosses)
  table.integer("enemy_life");
  //possible artifacts that can be dropped by the enemy, pulled from artifacts table
  table
    .integer("artifact_id")
    .references("artifact_id")
    .inTable("Artifacts");
  table.string("enemy_photo");
})

const Events = knex.schema.createTableIfNotExists("Events", table => {
  table.increments("event_id").primary();
  table.string("event_name");
  table.string("event_description");
  table.string("event_realm");
  //event effects on player craft, strength and life
  table.integer("event_strength");
  table.integer("event_craft");
  table.integer("event_life");
  table.string("event_photo");
})

Artifacts.then();
Followers.then();
Locations.then();
Enemies.then();
Events.then();

class Artifact extends Model {
  static get tableName() {
    return "Artifacts";
  }
}

class Follower extends Model {
  static get tableName() {
    return "Followers";
  }
}

class Location extends Model {
  static get tableName() {
    return "Locations";
  }
}

class Enemy extends Model {
  static get tableName() {
    return "Enemies";
  }
}

class Event extends Model {
  static get tableName() {
    return "Events";
  }
}

module.exports = {
  Artifact, Follower, Location, Enemy, Event
}
