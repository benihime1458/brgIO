const mongoose = require('mongoose');
const db = mongoose.connection;
mongoose.connect('mongodb+srv://benihime1458:benihime1458@exercises-tf92l.azure.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true });
db.on('error', () => console.log('error connecting to mongo'));
db.once('open', () => console.log('connected to mongo'));

const csv = require('csvtojson');
const problemsCSV = 'problems.csv';
const Problem = require('../models/problem.model.js');

let problems; 

csv({
  colParser: {
    "number": "number",
    "attempts": "number",
    "sends": "number",
    "dateSet": "date",
    "flashed": "boolean",
    "project": "boolean",
  },
  checkType: true
}).fromFile(problemsCSV)
  .then((jsonObj) => {
    jsonObj.map(climb => {
      climb.flashed = false
      climb.project = false
      climb.color = climb.color.toLowerCase()
      climb.area = climb.area.toLowerCase()
    })

    problems = jsonObj
  })
  .then(() => {
    for (let i in problems) {
      const newProblem = new Problem(problems[i]);
      newProblem.save((error, problem) =>
        error ? console.log('error saving ', error)
        : console.log('new problem saved ', problem )
      )
    }
  })


