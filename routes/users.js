"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.get("/", (req, res) => {
    console.log("WORK BITCH")
    knex
      .select("*")
      .from("users")
      .then((results) => {
        res.json(results);
    });
  });

  router.get('/scores', (req,res) => {
    knex.select('score')
      .from('game_data')
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

