const express = require('express');
const path = require('path');
const Joi = require('@hapi/joi');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;
const arrayString = ['banana', 'bacon', 'cheese'];
const arrayObjects = [
  { example: 'example1' },
  { example: 'example2' },
  { example: 'example3' }
];
const userInput = {
  personalInfo: {
    streetAddress: '123456787',
    city: 'sdgh',
    state: 'f1'
  },
  preferences: arrayObjects
};
const personalInfoSchema = Joi.object({
  streetAddress: Joi.string()
    .trim()
    .required(),
  city: Joi.string()
    .trim()
    .required(),
  state: Joi.string()
    .trim()
    .length(2)
    .required()
});
const preferencesSchema = Joi.array().items(
  Joi.object({
    example: Joi.string().required()
  })
);
const schema = Joi.object({
  personalInfo: personalInfoSchema,
  preferences: preferencesSchema
});

const result = schema.validate(userInput);
console.log(result);

app.use('/public', express.static(path.join(__dirname, 'static')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({}));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'static', 'index.html'));
});

app.get('/contact.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'static', 'contact.html'));
});
app.post('/', (req, res) => {});

app.listen(port, () => console.log(`App listening on port ${port}!`));
