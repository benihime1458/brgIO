const mongoose = require('mongoose');
let Climb = require('../models/climb.model');
console.log(Climb);

mongoose.connect('mongodb+srv://benihime1458:benihime1458@exercises-tf92l.azure.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', () => console.log('error connecting to mongo'));
db.once('open', () => console.log('connected to mongo'));

const slab = [];

for (let i = 137; i <= 154; i++) {
  let problem = {};
  problem.area = 'slab';
  problem.number = i;
  problem.wcw = false;
  problem.dateSet = '07 30 2019';
  
  i === 137 ? (problem.color = 'green', problem.grade = 0) : null 
  i === 138 ? (problem.color = 'yellow', problem.grade = 7) : null 
  i === 139 ? (problem.color = 'blue', problem.grade = 4) : null 
  i === 140 ? (problem.color = 'purple', problem.grade = 1) : null 
  i === 141 ? (problem.color = 'blue', problem.grade = 1) : null 
  i === 142 ? (problem.color = 'red', problem.grade = 4) : null 
  i === 143 ? (problem.color = 'pink', problem.grade = 3) : null 
  i === 144 ? (problem.color = 'orange', problem.grade = 3) : null 
  i === 145 ? (problem.color = 'red', problem.grade = 3) : null 
  i === 146 ? (problem.color = 'green', problem.grade = 5) : null 
  i === 147 ? (problem.color = 'black', problem.grade = 5) : null 
  i === 148 ? (problem.color = 'white', problem.grade = 6) : null 
  i === 149 ? (problem.color = 'orange', problem.grade = 5) : null 
  i === 150 ? (problem.color = 'purple', problem.grade = 6) : null 
  i === 151 ? (problem.color = 'yellow', problem.grade = 0) : null 
  i === 152 ? (problem.color = 'black', problem.grade = 2) : null 

  problem.color && problem.grade ? slab.push(problem) : null
}

// Remove collection in database if it already exists
Climb.deleteMany({area: 'slab'}, () => {
  console.log('removed from collection');
});

for (let i in slab) {
  const saveClimb = new Climb(slab[i]);
  saveClimb.save((error, slabProblem) => 
    error ? console.log('error saving ', error) 
    : console.log('saved ', slabProblem))
}


