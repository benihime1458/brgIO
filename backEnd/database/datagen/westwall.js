const mongoose = require('mongoose');
let Climb = require('../models/climb.model');
console.log(Climb);

mongoose.connect('mongodb+srv://benihime1458:benihime1458@exercises-tf92l.azure.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', () => console.log('error connecting to mongo'));
db.once('open', () => console.log('connected to mongo'));

const westwall = [];

for (let i = 196; i <= 212; i++) {
  let problem = {};
  problem.area = 'west wall';
  problem.number = i;
  problem.wcw = false;
  problem.dateSet = '08 17 2019';
  
  i === 196 ? (problem.color = 'white', problem.grade = 5) : null 
  i === 197 ? (problem.color = 'pink', problem.grade = 4) : null 
  i === 198 ? (problem.color = 'blue', problem.grade = 4) : null 
  i === 199 ? (problem.color = 'orange', problem.grade = 4) : null 
  i === 200 ? (problem.color = 'yellow', problem.grade = 7) : null 
  i === 201 ? (problem.color = 'green', problem.grade = 3) : null 
  i === 202 ? (problem.color = 'purple', problem.grade = 4) : null 
  i === 203 ? (problem.color = 'red', problem.grade = 6) : null 
  i === 204 ? (problem.color = 'pink', problem.grade = 5) : null 
  i === 205 ? (problem.color = 'yellow', problem.grade = 5) : null 
  i === 206 ? (problem.color = 'black', problem.grade = 1) : null 
  i === 207 ? (problem.color = 'black', problem.grade = 1) : null 
  i === 208 ? (problem.color = 'purple', problem.grade = 8) : null 
  i === 209 ? (problem.color = 'white', problem.grade = 5) : null 
  i === 210 ? (problem.color = 'blue', problem.grade = 3) : null 
  i === 211 ? (problem.color = 'green', problem.grade = 2) : null 
  i === 212 ? (problem.color = 'yellow', problem.grade = 5) : null 

  westwall.push(problem)
}

// Remove collection in database if it already exists
Climb.deleteMany({area: 'west wall'}, () => {
  console.log('removed from collection');
});

for (let i in westwall) {
  const saveClimb = new Climb(westwall[i]);
  saveClimb.save((error, westwall) => 
    error ? console.log('error saving ', error) 
    : console.log('saved ', westwall))
}


