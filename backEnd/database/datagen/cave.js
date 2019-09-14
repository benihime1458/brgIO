const mongoose = require('mongoose');
let Climb = require('../models/climb.model');
console.log(Climb);

mongoose.connect('mongodb+srv://benihime1458:benihime1458@exercises-tf92l.azure.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', () => console.log('error connecting to mongo'));
db.once('open', () => console.log('connected to mongo'));

const cave = [];

for (let i = 176; i <= 195; i++) {
  let problem = {};
  problem.area = 'cave';
  problem.number = i;
  problem.wcw = false;
  problem.dateSet = '08 13 2019';
  
  i === 176 ? (problem.color = 'green', problem.grade = 1) : null 
  i === 178 ? (problem.color = 'yellow', problem.grade = 3) : null 
  i === 179 ? (problem.color = 'purple', problem.grade = 3) : null 
  i === 180 ? (problem.color = 'pink', problem.grade = 3) : null 
  i === 181 ? (problem.color = 'red', problem.grade = 4) : null 
  i === 182 ? (problem.color = 'black', problem.grade = 3) : null 
  i === 183 ? (problem.color = 'orange', problem.grade = 5) : null 
  i === 184 ? (problem.color = 'orange', problem.grade = 4) : null 
  i === 185 ? (problem.color = 'pink', problem.grade = 6) : null 
  i === 187 ? (problem.color = 'purple', problem.grade = 7) : null 
  i === 188 ? (problem.color = 'yellow', problem.grade = 6) : null 
  i === 189 ? (problem.color = 'blue', problem.grade = 7) : null 
  i === 190 ? (problem.color = 'black', problem.grade = 8) : null 
  i === 191 ? (problem.color = 'green', problem.grade = 6) : null 
  i === 192 ? (problem.color = 'red', problem.grade = 8) : null 
  i === 193 ? (problem.color = 'yellow', problem.grade = 8) : null 
  i === 194 ? (problem.color = 'white', problem.grade = 8) : null 
  i === 195 ? (problem.color = 'green', problem.grade = 10) : null 

  problem.color && problem.grade ? cave.push(problem) : null
}

// Remove collection in database if it already exists
Climb.deleteMany({area: 'cave'}, () => {
  console.log('removed from collection');
});

for (let i in cave) {
  const saveClimb = new Climb(cave[i]);
  saveClimb.save((error, caveProblem) => 
    error ? console.log('error saving ', error) 
    : console.log('saved ', caveProblem))
}


