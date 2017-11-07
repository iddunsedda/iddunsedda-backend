const express = require('express');
const router = express.Router();
const { addArtifact, getAllArtifacts } = require('../dal');

router
  .route('/')
  .get((req, res) => {
    res.send('this is the homepage')
  })

router
  .route('/artifact')
  .get((req, res) => {
    getAllArtifacts().then((artifacts) => {
      res.send(artifacts)
    })
  })
  .post((req, res) => {
    console.log('req body', req.body);
    addArtifact(req.body).then(() => res.send('added new artifact ', req.body.name))
  })

module.exports = router
