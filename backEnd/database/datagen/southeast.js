const mongoose = require('mongoose');
let Climb = require('../models/climb.model');

mongoose.connect('mongodb+srv://benihime1458:benihime1458@exercises-tf92l.azure.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', () => console.log('error connecting to mongo'));
db.once('open', () => console.log('connected to mongo'));

const southeast = [];

for (let i = 219; i <= 227; i++) {
  let problem = {};
  problem.area = 'south east';
  problem.number = i;
  problem.wcw = false;
  problem.dateSet = '08 27 2019';
  
  i === 219 ? (problem.color = 'green', problem.grade = 5) : null 
  i === 220 ? (problem.color = 'blue', problem.grade = 5) : null 
  i === 221 ? (problem.color = 'black', problem.grade = 6) : null 
  i === 222 ? (problem.color = 'yellow', problem.grade = 5) : null 
  i === 223 ? (problem.color = 'orange', problem.grade = 7) : null 
  i === 224 ? (problem.color = 'yellow', problem.grade = 8) : null 
  i === 225 ? (problem.color = 'red', problem.grade = 8) : null 
  i === 226 ? (problem.color = 'white', problem.grade = 9) : null 
  i === 227 ? (problem.color = 'purple', problem.grade = 9) : null 

  problem.color && problem.grade ? southeast.push(problem) : null
}

for (let i = 229; i <= 238; i++) {
  let problem = {};
  problem.area = 'south east';
  problem.number = i;
  problem.wcw = false;
  problem.dateSet = '09 03 2019';
  
  i === 229 ? (problem.color = 'red', problem.grade = 0) : null 
  i === 232 ? (problem.color = 'blue', problem.grade = 2) : null 
  i === 235 ? (problem.color = 'yellow', problem.grade = 4) : null 
  i === 238 ? (problem.color = 'orange', problem.grade = 5) : null 

  problem.color && problem.grade ? southeast.push(problem) : null
}

// Remove collection in database if it already exists
Climb.deleteMany({area: 'south east'}, () => {
  console.log('removed from collection');
});

for (let i in southeast) {
  const saveClimb = new Climb(southeast[i]);
  saveClimb.save((error, southeastProblem) => 
    error ? console.log('error saving ', error) 
    : console.log('saved ', southeastProblem))
}


