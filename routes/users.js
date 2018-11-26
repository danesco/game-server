"use strict";

const express = require('express');
const router  = express.Router();
const app = express();
const cookieSession = require('cookie-session');

router.use(cookieSession({
  name: 'session',
  keys: ["DAN"]
}))

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
    console.log(req.body);
    knex('users').where('name', currentName).then((results) => {
      if(results[0]){
        res.send('Sorry that name has already been taken')
      } else {
          if(currentName === ''){
            res.status(404);
          } else {
            console.log("ID", req.session)
            knex('users')
              .insert({
                name: currentName
            }).then((result) => {
                req.session.id = 100;
                res.json(currentName);
                res.status(200);
                console.log("ID2", req.session.id)
                // res.redirect('/')
            })
          }
      }
    })
  });

  router.post('/login', (req, res) => {

  })

  return router;
}

