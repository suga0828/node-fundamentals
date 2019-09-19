const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World from Express');
});

app.get('/example', (req, res) => {
  res.send('Example route view');
});

app.get('/example/:name', (req, res) => {
  const { name } = req.params;
  const { search } = req.query;
  res.send(
    `Example route with name params: ${name} and query search: ${search}`
  );
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
