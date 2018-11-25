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

    const currentName = req.body.name;
    knex('users').where('name', currentName).then((results) => {
      if(results[0]){
        res.send('Sorry that name has already been taken')
      } else {
          if(currentName === ''){
            res.status(404);
          } else {
            knex('users')
              .insert({
                name: currentName
            }).then((result) => {
                res.json(currentName);
            })
          }
      }
    })
  });

  router.post('/login', (req, res) => {

  })

  return router;
}

