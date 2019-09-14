const mongoose = require('mongoose');
let Climb = require('../models/climb.model');

mongoose.connect('mongodb+srv://benihime1458:benihime1458@exercises-tf92l.azure.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', () => console.log('error connecting to mongo'));
db.once('open', () => console.log('connected to mongo'));

const southwest = [];

for (let i = 213; i <= 218; i++) {
  let problem = {};
  problem.area = 'south west';
  problem.number = i;
  problem.wcw = false;
  problem.dateSet = '08 27 2019';
  
  i === 213 ? (problem.color = 'pink', problem.grade = 2) : null 
  i === 214 ? (problem.color = 'purple', problem.grade = 3) : null 
  i === 215 ? (problem.color = 'yellow', problem.grade = 0) : null 
  i === 216 ? (problem.color = 'white', problem.grade = 1) : null 
  i === 217 ? (problem.color = 'green', problem.grade = 3) : null 
  i === 218 ? (problem.color = 'red', problem.grade = 5) : null 

  problem.color && problem.grade ? southwest.push(problem) : null
}

for (let i = 228; i <= 242; i++) {
  let problem = {};
  problem.area = 'south west';
  problem.number = i;
  problem.wcw = false;
  problem.dateSet = '09 03 2019';
  
  i === 228 ? (problem.color = 'orange', problem.grade = 0) : null 
  i === 230 ? (problem.color = 'purple', problem.grade = 1) : null 
  i === 231 ? (problem.color = 'purple', problem.grade = 2) : null 
  i === 233 ? (problem.color = 'pink', problem.grade = 3) : null 
  i === 234 ? (problem.color = 'yellow', problem.grade = 5) : null 
  i === 236 ? (problem.color = 'blue', problem.grade = 4) : null 
  i === 237 ? (problem.color = 'white', problem.grade = 6) : null 
  i === 239 ? (problem.color = 'purple', problem.grade = 7) : null 
  i === 240 ? (problem.color = 'green', problem.grade = 9) : null 
  i === 241 ? (problem.color = 'yellow', problem.grade = 8) : null 
  i === 242 ? (problem.color = 'black', problem.grade = 8) : null 

  problem.color && problem.grade ? southwest.push(problem) : null
}

// Remove collection in database if it already exists
Climb.deleteMany({area: 'south west'}, () => {
  console.log('removed from collection');
});


// Save collection
for (let i in southwest) {
  const saveClimb = new Climb(southwest[i]);
  saveClimb.save((error, southwestProblem) => 
    error ? console.log('error saving ', error) 
    : console.log('saved ', southwestProblem))
}


