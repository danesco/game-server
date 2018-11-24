"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.get("/", (req, res) => {
    knex
      .select("*")
      .from("game_data")
      .then((results) => {
        res.json(results);
    });
  });

  router.get('/scores', (req,res) => {
    knex('users')
    .select('name', 'score')
      .join('game_data', 'users.id', '=', 'game_data.user_id')
      .orderBy('score', 'desc')
      .then((results) => {
        res.json(results);
      });
  })

  router.post('/save', (req, res) => {
    knex.insert({

    })
  })

  return router;
}

