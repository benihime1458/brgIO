const mongoose = require('mongoose');
let Climb = require('../models/climb.model');

mongoose.connect('mongodb+srv://benihime1458:benihime1458@exercises-tf92l.azure.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', () => console.log('error connecting to mongo'));
db.once('open', () => console.log('connected to mongo'));

const northeast = [];

for (let i = 243; i <= 259; i++) {
  let problem = {};
  problem.area = 'north east';
  problem.number = i;
  problem.wcw = false;
  problem.dateSet = '09 10 2019';
  
  i === 243 ? (problem.color = 'black', problem.grade = 1) : null 
  i === 244 ? (problem.color = 'orange', problem.grade = 2) : null 
  i === 245 ? (problem.color = 'green', problem.grade = 1) : null 
  i === 246 ? (problem.color = 'blue', problem.grade = 3) : null 
  i === 247 ? (problem.color = 'red', problem.grade = 3) : null 
  i === 248 ? (problem.color = 'green', problem.grade = 2) : null 
  i === 249 ? (problem.color = 'blue', problem.grade = 4) : null 
  i === 250 ? (problem.color = 'pink', problem.grade = 4) : null 
  i === 251 ? (problem.color = 'pink', problem.grade = 5) : null 
  i === 252 ? (problem.color = 'orange', problem.grade = 5) : null 
  i === 253 ? (problem.color = 'white', problem.grade = 6) : null 
  i === 254 ? (problem.color = 'purple', problem.grade = 6) : null 
  i === 255 ? (problem.color = 'white', problem.grade = 7) : null 
  i === 256 ? (problem.color = 'orange', problem.grade = 8) : null 
  i === 257 ? (problem.color = 'purple', problem.grade = 8) : null 
  i === 258 ? (problem.color = 'yellow', problem.grade = 9) : null 
  i === 259 ? (problem.color = 'yellow', problem.grade = 0) : null 

  northeast.push(problem)
}

// Remove collection in database if it already exists
Climb.deleteMany({area: 'north east'}, () => {
  console.log('removed from collection');
});

for (let i in northeast) {
  const saveClimb = new Climb(northeast[i]);
  saveClimb.save((error, northeastProblem) => 
    error ? console.log('error saving ', error) 
    : console.log('saved ', northeastProblem))
}


