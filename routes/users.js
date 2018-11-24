"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.get("/", (req, res) => {
    knex('users')
      .select('*')
      .leftJoin('game_data', 'users.id', '=', 'game_data.user_id')
      .then((results) => {
        res.json(results);
    });
  });

  router.get('/users/scores', (req,res) => {
    knex('users')
      .select('name', 'score')
      .join('game_data', 'users.id', '=', 'game_data.user_id')
      .orderBy('score', 'desc')
      .then((results) => {
        res.json(results);
      });
  });

  // router.post('/user/save', (req, res) => {
  //   let currentUser = req.body.user;
  //   knex('game_data')
  //     .where('user_id', '=', currentUser)
  //     .insert({

  //   })
  // })

  router.post('/register', (req, res) => {

    const name = req.body.name;

    if(name === ''){
      res.status(404);
    } else {
        knex('users')
          .insert({
            name: name
        })
      }
  });

  return router;
}

