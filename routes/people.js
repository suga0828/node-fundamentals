const express = require('express');
const route = express.Router();

route.use('/:id', (req, res, next) => {
  console.log('middleware being used');
  req.id = req.params.id;
  next();
});

route.get('/', (req, res) => {
  res.send('/ being hit');
});

route.get('/:id', (req, res) => {
  res.send(`/${req.id} (people's id) being hit`);
});

module.exports = route;
