const mongoose = require('mongoose');
let Climb = require('../models/climb.model');
console.log(Climb);

mongoose.connect('mongodb+srv://benihime1458:benihime1458@exercises-tf92l.azure.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', () => console.log('error connecting to mongo'));
db.once('open', () => console.log('connected to mongo'));

const corridor = [];

for (let i = 155; i <= 168; i++) {
  let problem = {};
  problem.area = 'corridor';
  problem.number = i;
  problem.wcw = false;
  problem.dateSet = '08 06 2019';
  
  i === 155 ? (problem.color = 'red', problem.grade = 0) : null 
  i === 156 ? (problem.color = 'purple', problem.grade = 8) : null 
  i === 157 ? (problem.color = 'pink', problem.grade = 1) : null 
  i === 158 ? (problem.color = 'orange', problem.grade = 1) : null 
  i === 159 ? (problem.color = 'white', problem.grade = 2) : null 
  i === 160 ? (problem.color = 'green', problem.grade = 5) : null 
  i === 161 ? (problem.color = 'yellow', problem.grade = 6) : null 
  i === 162 ? (problem.color = 'purple', problem.grade = 3) : null 
  i === 163 ? (problem.color = 'purple', problem.grade = 0) : null 
  i === 164 ? (problem.color = 'blue', problem.grade = 4) : null 
  i === 165 ? (problem.color = 'pink', problem.grade = 4) : null 
  i === 166 ? (problem.color = 'yellow', problem.grade = 7) : null 
  i === 167 ? (problem.color = 'red', problem.grade = 5) : null 
  i === 168 ? (problem.color = 'yellow', problem.grade = 2) : null 

  problem.color && problem.grade ? corridor.push(problem) : null
}

// Remove collection in database if it already exists
Climb.deleteMany({area: 'corridor'}, () => {
  console.log('removed from collection');
});

for (let i in corridor) {
  const saveClimb = new Climb(corridor[i]);
  saveClimb.save((error, corridorProblem) => 
    error ? console.log('error saving ', error) 
    : console.log('saved ', corridorProblem))
}


